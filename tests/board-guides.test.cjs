#!/usr/bin/env node
const test = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync, readdirSync, existsSync } = require('node:fs');
const { join, resolve } = require('node:path');
const { lookupBoard, mountBoardGuides } = require('../board-guides.js');

const root = resolve(__dirname, '..');
const html = readFileSync(join(root, 'index.html'), 'utf8');
const boardFiles = readdirSync(join(root, 'boards')).filter((file) => file.endsWith('-board.png'));
const articles = [...html.matchAll(/<article class="trick reveal" id="(t\d+)">([\s\S]*?)<\/article>/g)];

test('each of 240 tricks has one locally existing, correctly keyed board after its animation', () => {
  assert.equal(articles.length, 240);
  assert.equal(boardFiles.length, 240);
  const used = new Set();
  for (const [, id, markup] of articles) {
    const sources = [...markup.matchAll(/<img class="board-img" src="([^"]+)"/g)];
    assert.equal(sources.length, 1, id + ' board image count');
    const src = sources[0][1];
    assert.match(src, new RegExp('^boards/' + id + '-[a-z0-9-]+-board\\.png$'));
    assert.ok(existsSync(join(root, src)), id + ' missing file ' + src);
    assert.ok(!used.has(src), id + ' duplicate board ' + src);
    used.add(src);
    assert.ok(markup.includes('<ol class="steps">'), id + ' missing written steps');
    assert.ok(markup.indexOf('class="animplayer" data-anim="' + id + '"') !== -1, id + ' missing animation');
    assert.ok(markup.indexOf('class="animplayer" data-anim="' + id + '"') < markup.indexOf('class="board-fig"'), id + ' guide placement');
  }
  assert.equal(used.size, 240);
  for (const file of boardFiles) assert.ok(used.has('boards/' + file), 'unreferenced file ' + file);
  for (let i = 1; i <= 240; i++) assert.ok(articles.some((m) => m[1] === 't' + i), 'missing trick t' + i);
});

test('photo-guide script is loaded by the page and cached with the shell, not giant PNGs', () => {
  assert.match(html, /<script src="board-guides\.js"><\/script>/);
  const sw = readFileSync(join(root, 'sw.js'), 'utf8');
  assert.match(sw, /'\.\/board-guides\.js'/);
  assert.doesNotMatch(sw, /ASSETS\s*=\s*\[[^\]]*board\.png/);
});

function element(tag) {
  const el = {
    tag, className: '', hidden: false, children: [], parentNode: null, events: {},
    classList: {
      contains(name) { return el.className.split(/\s+/).includes(name); },
      add(name) { if (!this.contains(name)) el.className += (el.className ? ' ' : '') + name; },
    },
    appendChild(child) {
      if (child.parentNode) {
        const old = child.parentNode.children;
        old.splice(old.indexOf(child), 1);
      }
      this.children.push(child);
      child.parentNode = this;
    },
    insertBefore(child, ref) {
      this.children.splice(this.children.indexOf(ref), 0, child);
      child.parentNode = this;
    },
    setAttribute(name, val) { this[name] = val; },
    addEventListener(name, fn) { this.events[name] = fn; },
  };
  return el;
}

function fixture(id = 't101', src = 'boards/t101-the-cooler-board.png') {
  const host = element('div');
  const image = element('img');
  image.complete = false;
  image.naturalWidth = 0;
  image.getAttribute = (name) => name === 'src' ? src : null;
  const figure = element('figure');
  figure.querySelector = (selector) => selector === 'img.board-img' ? image : null;
  figure.appendChild(image);
  host.appendChild(figure);
  const article = { id, querySelector: (selector) => selector === 'figure.board-fig' ? figure : null };
  const doc = { querySelectorAll: () => [article], createElement: element };
  return { host, image, figure, article, doc };
}

test('lookup accepts a local board for its trick, rejects missing or mismatched paths', () => {
  const f = fixture();
  assert.equal(lookupBoard(f.article).path, 'boards/t101-the-cooler-board.png');
  assert.equal(lookupBoard(fixture('t101', 'boards/t102-tossed-out-deck-board.png').article), null);
  assert.equal(lookupBoard(fixture('t101', 'https://example.com/board.png').article), null);
  assert.equal(lookupBoard(fixture('t101', '').article), null);
  assert.equal(lookupBoard(fixture('t0').article), null);
  assert.equal(lookupBoard({ id: 't1', querySelector: () => null }), null);
});

test('mount makes a collapsible reference and is idempotent without changing lesson content', () => {
  const f = fixture();
  assert.equal(mountBoardGuides(f.doc), 1);
  const details = f.host.children[0];
  assert.equal(details.tag, 'details');
  assert.equal(details.open, true, 'photo steps should be visible without expanding a disclosure');
  assert.equal(details.children[0].tag, 'summary');
  assert.equal(details.children[1], f.figure);
  assert.equal(details.children[2].hidden, true);
  assert.equal(f.figure.hidden, false);
  assert.equal(mountBoardGuides(f.doc), 0);
});

test('failed image hides the broken placeholder and offers usable fallback instructions', () => {
  const f = fixture();
  mountBoardGuides(f.doc);
  f.image.events.error();
  const details = f.host.children[0];
  assert.equal(f.figure.hidden, true);
  assert.equal(details.children[2].hidden, false);
  assert.match(details.children[2].textContent, /animation and written steps/);
  assert.equal(details.children[2].role, 'status');
  assert.ok(details.classList.contains('unavailable'));
});

test('invalid or already-failed board resolves to the fallback immediately', () => {
  const missing = fixture('t1', 'boards/t999-nonexistent-board.png');
  mountBoardGuides(missing.doc);
  assert.equal(missing.figure.hidden, true);
  assert.equal(missing.host.children[0].children[2].hidden, false);

  const broken = fixture();
  broken.image.complete = true;
  broken.image.naturalWidth = 0;
  mountBoardGuides(broken.doc);
  assert.equal(broken.figure.hidden, true);
  assert.equal(broken.host.children[0].children[2].hidden, false);
});
