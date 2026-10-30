/* Progressive photo reference for the existing step-board images.
 * The lesson HTML owns each board URL; animations and learner captions are untouched.
 */
(function (root, factory) {
  var api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (!root || !root.document) return;
  function init() { api.mountBoardGuides(root.document); }
  if (root.document.readyState === 'loading') {
    root.document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(typeof window !== 'undefined' ? window : null, function () {
  'use strict';

  function lookupBoard(article) {
    if (!article || !/^t[1-9]\d*$/.test(article.id)) return null;
    var figure = article.querySelector('figure.board-fig');
    var image = figure && figure.querySelector('img.board-img');
    var path = image && image.getAttribute('src');
    var match = /^boards\/(t[1-9]\d*)-[a-z0-9-]+-board\.png$/.exec(path || '');
    return match && match[1] === article.id ? { figure: figure, image: image, path: path } : null;
  }

  function mountBoardGuides(doc) {
    var mounted = 0;
    doc.querySelectorAll('article.trick').forEach(function (article) {
      var figure = article.querySelector('figure.board-fig');
      if (!figure || (figure.parentNode && figure.parentNode.classList &&
          figure.parentNode.classList.contains('board-guide'))) return;

      var asset = lookupBoard(article);
      var details = doc.createElement('details');
      details.className = 'board-guide';
      // Show photographic steps by default so learners actually discover them.
      // Native <details> still lets them collapse a long board when desired.
      details.open = true;
      var summary = doc.createElement('summary');
      summary.textContent = 'Photo step guide (all steps)';
      var fallback = doc.createElement('p');
      fallback.className = 'board-guide-fallback';
      fallback.textContent = 'Step photos are unavailable. Continue with the animation and written steps above.';
      fallback.hidden = true;
      fallback.setAttribute('role', 'status');

      figure.parentNode.insertBefore(details, figure);
      details.appendChild(summary);
      details.appendChild(figure);
      details.appendChild(fallback);
      mounted++;

      var failed = false;
      function unavailable() {
        if (failed) return;
        failed = true;
        figure.hidden = true;
        fallback.hidden = false;
        details.classList.add('unavailable');
      }

      if (!asset) {
        unavailable();
      } else {
        asset.image.addEventListener('error', unavailable, { once: true });
        // A failed image may have completed before this script registered.
        if (asset.image.complete && asset.image.naturalWidth === 0) unavailable();
      }
    });
    return mounted;
  }

  return { lookupBoard: lookupBoard, mountBoardGuides: mountBoardGuides };
});
