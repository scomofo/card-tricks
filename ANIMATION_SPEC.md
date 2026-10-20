# Animation Scene Spec — card-tricks

How scenes in `anims.js` are written, what the player understands, and the
rules a scene must follow so the animation *teaches* the trick instead of
decorating it. Written for whoever (or whatever) generates the next batch of
scenes: everything needed is in this document plus the article text in
`index.html`.

Run the validator before committing any scene change:

```
node validate-anims.mjs            # pilots must pass; legacy warnings listed
node validate-anims.mjs --verbose  # full warning list
```

Exit code is 1 if a pilot scene fails or `anims.js` doesn't parse.

---

## The rubric (what a scene is for)

After watching a scene once, a learner can:

1. **State the secret** — what actually happened, not just what it looked like.
2. **Reproduce the sequence** — the handling steps in order, counts and
   positions right.
3. **Call the moment** — point at the exact step where the secret move happens
   and say what the audience sees at that instant.

If the secret exists only in the caption text, the scene fails rule 1.
The picture must show it — in Exposed view (below).

## Scene format

Scenes are entries in `anims.js`: `ANIMS.tNN = { steps: [ … ] }`. The key
must match the `data-anim` attribute of the article's
`<div class="animplayer" data-anim="tNN"></div>` in `index.html`.

Each **step** is one phase of the article's written method, in the article's
order. A phase may split into two steps when a secret transit needs its own
beat (e.g. a stolen card travelling before it is revealed), but never merge
two method phases into one step.

```js
{ caption: "HTML string — what happens, in the article's terms. <b>bold</b> the key fact.",
  beats: ["technique tag", "…"],        // optional; the site's technique vocabulary
  climax: true,                          // exactly one step per pilot scene: the reveal
  actions: [ /* see below */ ] }
```

**Setup state** is declared by step 1's actions: every card that matters
exists from step 1, with its identity, even if the audience never learns it.

## Actions

Coordinates: `x`/`y` are % of the stage (stage is 16:10). Card width `w` is %
of stage width; default 9.5. `z` sets z-index.

### Long-standing actions (unchanged semantics)

| action | fields | meaning |
|---|---|---|
| `deck` | `id, x, y, n?, w?, z?` | full-deck block (use only for a genuinely untouched deck) |
| `packet` | `id, x, y, n?, w?, z?` | anonymous small stack |
| `card` | `id, rank, suit, x, y, face:'up'\|'down', w?, z?, deg?` | one card |
| `fan` | `x, y, count\|cards, spread?, startDeg?, radius?, w?, face?, prefix?` | arc of cards; `cards:[{id?,rank,suit,face}]` |
| `spread` | `x, y, count\|cards, dx?, dy?, w?, face?, prefix?, stagger?` | row of cards |
| `hand` | `id?, x, y, side?, emoji?, on?` | hand glyph; `on:false` hides |
| `move` | `id, x, y, z?, w?, deg?, scale?` | animate element to a new position |
| `flip` | `id, to:'up'\|'down'` | turn a card over |
| `hi` | `id, on` | gold highlight |
| `scale` | `id, s` | explicit scale |
| `rot` | `id, deg` | rotate |
| `label` | `id, text, x, y` | gold pill label (updates in place by id) |
| `unlabel` | `id` | hide a label |
| `note` | `id, text, x, y` | cream note box (updates in place by id) |
| `unnote` | `id` | hide a note |
| `remove` | `id` | remove an element |

### Pilot extensions (the teaching layer)

**Declared packet contents.** A `packet` may declare its composition:

```js
{t:'packet', id:'stk', x:50, y:50, w:14, cards:[
  {rank:'9', suit:'♥', face:'down'}, {bulk:15}, {rank:'K', suit:'♠', face:'down'} ]}
```

`cards` is ordered **bottom → top**. Each entry is a real card
(`{rank, suit, face}`) or `{bulk:n}` — n indifferent face-down cards.
The packet renders as a real stack of mini-cards: the top card's face shows
when its `face` is `'up'`; the count badge shows the true total. In Exposed
view, a face-down top card shows a ghost of its identity, and a face-down
bottom card gets a `bottom: K♠` tag.

**`repacket`** — `{t:'repacket', id, cards}` re-declares an existing packet's
composition (cards dealt away, packets merged/split by remove + create).
Identities that leave a packet must reappear in the same step (dealt cards)
or be gone for good — see conservation.

**Secret identity.** A face-down `card` may declare its true identity:

```js
{t:'card', id:'sel', rank:'A', suit:'♠', x:50, y:36, face:'down', secret:{rank:'A', suit:'♠'}}
```

`secret` must equal the card's real rank/suit (it *is* the card's identity;
`rank`/`suit` on a face-down card are never shown in Audience view). In
Exposed view the identity renders as a faint ghost face over the back.

**Ghost elements.** `{t:'card', …, ghost:true}` marks an element as
secret-layer: **invisible in Audience view**; in Exposed view it renders
translucent, dashed gold, offset up-left so hidden layers separate visually.
Use it for things the audience must not perceive as separate objects: the
second card of a double, a force card being tracked through a riffle.
Don't `hi` a ghost element (the highlight transform overrides the offset).

**Palming.** `{t:'palm', id}` marks an element palmed: hidden in Audience
view; in Exposed view it shows ghosted with a dashed outline, wherever the
scene moves it (move it with the hand). `{t:'unpalm', id}` releases it —
it becomes visible in both views at its current position.

**Reveal.** `{t:'reveal', id}` turns a ghost element solid and public
(a tracked force card becomes the card the spectator takes). Its secret
ghost face still annotates it in Exposed view.

**Grip callouts.** `hand` accepts `grip:'…'` — a small label under the hand
glyph naming the grip (`"mechanic's grip"`, `'dealing grip'`,
`'by the ends'`). Set it on the step where the grip is established; pass
`grip:''` to clear it. Only name a grip when the article names or clearly
implies it, and only where the grip is part of the lesson.

**Climax.** `climax:true` on the reveal step styles its caption gold.
Exactly one per pilot scene.

## Player behaviour (for scene authors)

- The player replays history instantly and animates only the current step;
  creations and state changes (`palm`, `repacket`, …) apply first, then
  `move`/`flip`/`hi`/`rot`/`scale` animate. A card can be created and palmed
  in the same step without ever flashing in Audience view.
- Scenes using any secret-layer feature get an **Audience | Exposed**
  toggle in the controls. Every player gets prev/next/restart, a loop-step
  button, speed buttons, and a **↺¼ replay** button that replays the current
  step with all transitions stretched ~4× (quarter speed).
- `prefers-reduced-motion` still disables animation globally.

## Authoring rules

1. **One step per phase of the article's method, in the article's order.**
   Captions in the article's own terms and voice; bold the one fact the
   learner must keep.
2. **Labels annotate; they never carry the secret alone.** If a step's
   secret can't be seen in Exposed view, the scene is wrong, not the view.
3. **Every face-down card that matters has a declared identity** (as a
   `card` with `secret`, in a packet's `cards`, or as a `ghost`). Anonymous
   backs are only for cards that genuinely don't matter.
4. **Card conservation** (validator-enforced for pilots):
   - R1: an identity is never in two places at once.
   - R2: an identity removed in an earlier step never reappears on a
     different element. Transfers happen within a single step
     (remove + re-create, or `repacket` + create).
   - R3: no inventing secrets mid-scene — an identity may only appear
     hidden if it was declared in the setup step or already shown face-up.
   A vanish must be a `remove` (or a `palm` that never returns on stage);
   a production must be the same element (`unpalm`/`reveal`/move), never a
   fresh `card` with the same identity.
5. **Packets over blocks** whenever composition matters: if the method
   talks about what's on top/bottom or how a packet is built, declare
   `cards` — don't use a `deck` block or an anonymous `packet`.
6. **Beats** come from the site's technique vocabulary (the terms the
   cheat sheet and curriculum use). The step where a sleight happens names
   the sleight in its beats — the validator requires secret-layer content
   on such steps.
7. **Don't hi ghost elements; don't remove an element and reference it
   later; don't re-create a live id.** The validator catches all three,
   but scenes should be written clean, not caught.

## The six pilot scenes (reference implementations)

| id | trick | what it demonstrates |
|---|---|---|
| t1 | Key Card Principle | secret identity on the key card; cut into two declared packets; payoff spread where key and selection are adjacent real cards |
| t4 | Double Lift | the double as two elements — the hidden card is a `ghost`; turnover flips both; the dealt card is `reveal`ed as a different identity than the audience believes |
| t14 | Classic Force | the force card tracked as a `ghost` across the riffle to the spectator's fingertip, then `reveal`ed as the taken card |
| t29 | Ten-Card Poker Deal | a fully declared 10-card stack; `repacket` as cards are dealt; both hands built from the same ten identities; double-flip climax |
| t50 | Erdnase Color Change | face-up packet with a declared bottom card; the stolen card `palm`ed, wiped back, and `unpalm`ed as the new face |
| t89 | One-Hand Top Palm | `palm` state carried across steps while the deck leaves with the other hand; grip callout for the lever |

Note on t50: the article's step 4 says the original face card "is now the
new bottom card," which doesn't square with its own step 3 (the bottom card
is stolen into the palm). The scene stages the standard Erdnase handling
the article's steps 1–3 describe — bottom card stolen under cover, then
left on the face by the wiping hand — and the caption words the result
plainly ("it's still there, right underneath"). Flagged for the author;
article text was not changed.

Update (2026-10-20): on the author's ruling, the article's steps 3–4 were
rewritten to the handling the scene stages — the stolen card stays palmed
(not carried away for good), the wiping hand leaves it on the face, and
the original face card is drawn underneath to become the bottom card —
so the article and the scene now agree. The paragraph above is kept as
the record of the original discrepancy.
