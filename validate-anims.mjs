#!/usr/bin/env node
/* validate-anims.mjs — standalone validator for anims.js scenes.
 *
 * Usage:  node validate-anims.mjs [--verbose]
 *
 * Loads anims.js with DOM stubs, then simulates every scene's actions and
 * checks (see ANIMATION_SPEC.md for the rules in prose):
 *
 *   Structural (all scenes)
 *     - scene parses and has at least one step
 *     - every step has a non-empty caption
 *     - actions reference element ids that are live at that point
 *       (hands live under 'h'+id, labels under '$'+id, notes under 'n'+id)
 *     - an element id is never re-created while still live
 *
 *   Card conservation (errors for pilot scenes, warnings for legacy scenes)
 *     R1  an identity (rank+suit) is never held by two live elements at once
 *     R2  an identity removed in an earlier step never reappears on a
 *         different element (no teleports; same-step transfers are fine)
 *     R3  an identity may only appear in a hidden context (face-down card,
 *         packet content, secret) if it was declared in the setup step or
 *         has already been shown face-up — secrets can't be invented mid-scene
 *
 *   Pilot scenes only (t1, t4, t14, t29, t50, t89)
 *     - exactly one step marked climax:true
 *     - every step whose beats name a sleight has secret-layer content:
 *       a ghost/secret element is created, a palm/repacket action runs, or a
 *       secret-flagged element is moved/flipped/revealed in that step
 *
 * Exit code: 1 if any pilot scene has an error, or any scene fails to parse.
 * Legacy-scene conservation problems are reported as warnings only.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import vm from 'node:vm';

const ROOT = dirname(fileURLToPath(import.meta.url));
const VERBOSE = process.argv.includes('--verbose');
const PILOTS = ['t1', 't4', 't14', 't29', 't50', 't89'];
const SLEIGHT_RE = /palm|double|force|slip|steal|cull|pass|change|glimpse|break|lever|second deal/i;

// ---- load anims.js --------------------------------------------------------
const sandbox = {
  window: { matchMedia: () => ({ matches: false }) },
  document: {
    querySelectorAll: () => [],
    createElement: () => ({
      style: {}, classList: { add() {}, remove() {}, toggle() {} },
      setAttribute() {}, appendChild() {},
    }),
  },
  console,
};
vm.createContext(sandbox);
let ANIMS;
try {
  vm.runInContext(readFileSync(join(ROOT, 'anims.js'), 'utf8'), sandbox, { filename: 'anims.js' });
  ANIMS = sandbox.ANIMS;
  if (!ANIMS) throw new Error('ANIMS global not defined');
} catch (e) {
  console.error('FATAL: anims.js failed to parse/load:', e.message);
  process.exit(1);
}

// ---- helpers ---------------------------------------------------------------
const ident = (rank, suit) => (rank && suit ? rank + '|' + suit : null);

function packetIdentities(cards) {
  const out = [];
  (cards || []).forEach((cd) => {
    if (!cd || cd.bulk) return;
    const idn = ident(cd.rank, cd.suit);
    if (idn) out.push({ idn, hidden: cd.face !== 'up' });
  });
  return out;
}

// Simulate one scene. Returns {errors:[], warnings:[]}.
function validateScene(tid, anim) {
  const errors = [], warnings = [];
  const isPilot = PILOTS.includes(tid);
  const push = (msg) => (isPilot ? errors : warnings).push(msg);

  if (!anim || !Array.isArray(anim.steps) || !anim.steps.length) {
    errors.push('scene has no steps');
    return { errors, warnings };
  }

  const live = new Map(); // elId -> {identities:Set, secret:bool}
  const holders = new Map(); // identity -> elId
  const known = new Set(); // identities declared (setup) or shown face-up
  let graveyard = new Map(); // identity -> step index removed (finalised per step)
  let climaxCount = 0;

  const addIdentity = (elId, idn, stepIdx, hidden, isSetup) => {
    if (!idn) return;
    if (holders.has(idn) && holders.get(idn) !== elId) {
      push(`step ${stepIdx + 1}: R1 identity ${idn} held by both '${holders.get(idn)}' and '${elId}'`);
    }
    if (graveyard.has(idn)) {
      push(`step ${stepIdx + 1}: R2 identity ${idn} reappears on '${elId}' after being removed in step ${graveyard.get(idn) + 1} (teleport)`);
      graveyard.delete(idn);
    }
    if (hidden && !isSetup && !known.has(idn)) {
      push(`step ${stepIdx + 1}: R3 identity ${idn} appears hidden on '${elId}' but was never declared in the setup or shown face-up`);
    }
    if (!hidden || isSetup) known.add(idn);
    else known.add(idn); // declared now (flagged above if illegal); keep tracking sane
    holders.set(idn, elId);
    const rec = live.get(elId);
    if (rec) rec.identities.add(idn);
  };

  const dropElement = (elId, stepIdx, removedThisStep) => {
    const rec = live.get(elId);
    if (!rec) return;
    rec.identities.forEach((idn) => {
      if (holders.get(idn) === elId) holders.delete(idn);
      removedThisStep.add(idn);
    });
    live.delete(elId);
  };

  anim.steps.forEach((step, si) => {
    const isSetup = si === 0;
    if (step.climax) climaxCount++;
    if (!step.caption || !String(step.caption).trim()) {
      push(`step ${si + 1}: missing or empty caption`);
    }
    const removedThisStep = new Set();
    let stepSecret = false;
    const beatsText = (step.beats || []).join(' ');

    const createEl = (elId, opts = {}) => {
      if (live.has(elId)) {
        push(`step ${si + 1}: element '${elId}' created while already live`);
        dropElement(elId, si, removedThisStep);
      }
      live.set(elId, { identities: new Set(), secret: !!opts.secret });
      if (opts.secret) stepSecret = true;
      (opts.identities || []).forEach(({ idn, hidden }) => addIdentity(elId, idn, si, hidden, isSetup));
    };
    const refEl = (elId, actionT) => {
      if (!live.has(elId)) {
        push(`step ${si + 1}: action '${actionT}' references unknown element '${elId}'`);
        return null;
      }
      return live.get(elId);
    };

    (step.actions || []).forEach((a) => {
      switch (a.t) {
        case 'deck':
          createEl(a.id);
          break;
        case 'packet':
          createEl(a.id, {
            secret: packetIdentities(a.cards).some((x) => x.hidden),
            identities: packetIdentities(a.cards),
          });
          break;
        case 'repacket': {
          const rec = refEl(a.id, a.t);
          if (rec) {
            stepSecret = true;
            // old contents leave (transfer within the step), new contents enter
            const old = [...rec.identities];
            old.forEach((idn) => { if (holders.get(idn) === a.id) holders.delete(idn); removedThisStep.add(idn); });
            rec.identities = new Set();
            packetIdentities(a.cards).forEach(({ idn, hidden }) => addIdentity(a.id, idn, si, hidden, isSetup));
            // identities that stayed in the packet were never really removed
            rec.identities.forEach((idn) => removedThisStep.delete(idn));
          }
          break;
        }
        case 'card': {
          const idn = ident(a.rank, a.suit);
          createEl(a.id, {
            secret: !!(a.secret || a.ghost),
            identities: idn ? [{ idn, hidden: a.face === 'down' || !!a.secret }] : [],
          });
          break;
        }
        case 'fan':
        case 'spread': {
          const count = a.count || (a.cards && a.cards.length) || 0;
          const prefix = a.prefix || (a.t === 'fan' ? 'fan' : 'sp');
          for (let i = 0; i < count; i++) {
            const cd = (a.cards && a.cards[i]) || {};
            const elId = cd.id || prefix + i;
            const idn = ident(cd.rank, cd.suit);
            createEl(elId, {
              identities: idn ? [{ idn, hidden: (cd.face || a.face || 'down') !== 'up' }] : [],
            });
          }
          break;
        }
        case 'hand': {
          const hid = 'h' + (a.id || 'main');
          if (!live.has(hid)) live.set(hid, { identities: new Set(), secret: false });
          break;
        }
        case 'label': live.set('$' + a.id, { identities: new Set(), secret: false }); break;
        case 'note': live.set('n' + a.id, { identities: new Set(), secret: false }); break;
        case 'unlabel': refEl('$' + a.id, a.t); break;
        case 'unnote': refEl('n' + a.id, a.t); break;
        case 'palm':
          stepSecret = true;
          refEl(a.id, a.t);
          break;
        case 'unpalm':
        case 'reveal': {
          // releasing/revealing is itself secret-layer content: it only
          // makes sense on an element the audience couldn't fully see
          stepSecret = true;
          refEl(a.id, a.t);
          break;
        }
        case 'move':
        case 'rot':
        case 'flip':
        case 'hi':
        case 'scale': {
          const rec = refEl(a.id, a.t);
          if (rec && rec.secret) stepSecret = true;
          break;
        }
        case 'remove': {
          if (!live.has(a.id)) push(`step ${si + 1}: action 'remove' references unknown element '${a.id}'`);
          else dropElement(a.id, si, removedThisStep);
          break;
        }
        default:
          push(`step ${si + 1}: unknown action type '${a.t}'`);
      }
    });

    // finalise this step's removals into the graveyard
    removedThisStep.forEach((idn) => { if (!holders.has(idn)) graveyard.set(idn, si); });

    if (isPilot && SLEIGHT_RE.test(beatsText) && !stepSecret) {
      errors.push(`step ${si + 1}: beats name a sleight ("${beatsText}") but the step has no secret-layer content`);
    }
  });

  if (isPilot && climaxCount !== 1) {
    errors.push(`pilot scene must mark exactly one climax step (found ${climaxCount})`);
  }
  return { errors, warnings };
}

// ---- run -------------------------------------------------------------------
const html = readFileSync(join(ROOT, 'index.html'), 'utf8');
const playerIds = [...html.matchAll(/class="animplayer" data-anim="(t\d+)"/g)].map((m) => m[1]);

let pilotFailures = 0;
let totalErrors = 0, totalWarnings = 0;
const warningScenes = [];

console.log(`Scenes in anims.js: ${Object.keys(ANIMS).length} · players in index.html: ${playerIds.length}`);
const missingScenes = playerIds.filter((id) => !ANIMS[id]);
if (missingScenes.length) console.log(`WARNING: players without scenes: ${missingScenes.join(', ')}`);

console.log('\n--- Pilot scenes ---');
for (const tid of PILOTS) {
  const { errors, warnings } = validateScene(tid, ANIMS[tid]);
  totalErrors += errors.length; totalWarnings += warnings.length;
  if (errors.length) pilotFailures++;
  console.log(`${tid}: ${errors.length ? 'FAIL' : 'PASS'}${warnings.length ? ` (${warnings.length} warnings)` : ''}`);
  errors.forEach((e) => console.log(`   ERROR  ${e}`));
  if (VERBOSE) warnings.forEach((w) => console.log(`   warn   ${w}`));
}

console.log('\n--- Legacy scenes (warnings only) ---');
for (const tid of Object.keys(ANIMS)) {
  if (PILOTS.includes(tid)) continue;
  const { errors, warnings } = validateScene(tid, ANIMS[tid]);
  const all = [...errors, ...warnings];
  totalWarnings += all.length;
  if (all.length) warningScenes.push([tid, all]);
}
console.log(`legacy scenes with warnings: ${warningScenes.length} of ${Object.keys(ANIMS).length - PILOTS.length}`);
if (VERBOSE) {
  warningScenes.forEach(([tid, ws]) => { console.log(`${tid}:`); ws.forEach((w) => console.log(`   warn   ${w}`)); });
} else {
  // compact census of warning kinds
  const kinds = {};
  warningScenes.forEach(([, ws]) => ws.forEach((w) => {
    const k = w.replace(/step \d+: /, '').replace(/'[^']*'/g, "'X'").replace(/[A-Z0-9]|./g, (c) => c).split(':')[0];
    kinds[k] = (kinds[k] || 0) + 1;
  }));
  Object.entries(kinds).sort((a, b) => b[1] - a[1]).forEach(([k, c]) => console.log(`  ${c}× ${k}`));
  console.log('  (run with --verbose for the full list)');
}

console.log(`\nTOTAL: ${totalErrors} pilot errors · ${totalWarnings} warnings`);
process.exit(pilotFailures ? 1 : 0);
