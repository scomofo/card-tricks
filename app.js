(function(){
  // scroll progress
  var bar = document.getElementById('progress');
  function onScroll(){
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
  }
  document.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
  // reveal on scroll
  var els = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, {threshold: 0.08});
    els.forEach(function(el){ io.observe(el); });
  } else {
    els.forEach(function(el){ el.classList.add('visible'); });
  }
})();
(function(){

"use strict";

var KEY='sleight-school-learned', learned=[];

try{ learned=JSON.parse(localStorage.getItem(KEY)||'[]'); }catch(e){ learned=[]; }

function save(){ try{ localStorage.setItem(KEY, JSON.stringify(learned)); }catch(e){} }

function refresh(){

  var boxes=document.querySelectorAll('.learned input');

  boxes.forEach(function(b){ b.checked=learned.indexOf(b.getAttribute('data-trick'))>=0; });

  document.querySelectorAll('nav.toc ol a').forEach(function(a){

    var id=a.getAttribute('href').slice(1);

    a.classList.toggle('done', learned.indexOf(id)>=0);

  });

  var n=learned.length, total=boxes.length;
  var pfill=document.getElementById('pfill');
  var ptext=document.getElementById('ptext');
  if(pfill){
    pfill.style.width=(total? (100*n/total):0)+'%';
    pfill.classList.toggle('complete', total>0 && n>=total);
  }
  if(ptext){
    ptext.textContent=n+' of '+total+' learned';
    ptext.classList.toggle('complete', total>0 && n>=total);
  }

}

document.querySelectorAll('.learned input').forEach(function(b){

  b.addEventListener('change', function(){

    var id=b.getAttribute('data-trick'), ix=learned.indexOf(id);

    if(b.checked && ix<0) learned.push(id);

    if(!b.checked && ix>=0) learned.splice(ix,1);

    save(); refresh();

  });

});

document.getElementById('surpriseBtn').addEventListener('click', function(){

  var arts=document.querySelectorAll('article.trick');

  var pick=arts[Math.floor(Math.random()*arts.length)];

  pick.scrollIntoView({behavior:'smooth', block:'start'});

  pick.classList.remove('reveal');

});

document.getElementById('printBtn').addEventListener('click', function(){ window.print(); });


/* ---------- Sleight School Interactive Training Suite Logic ---------- */
(function(){
  "use strict";

  function getEl(id){ return document.getElementById(id); }

  // Data Keys
  var KEY_LEARNED = 'sleight-school-learned';
  var KEY_BOOKMARKS = 'sleight-school-bookmarks';
  var KEY_NOTES = 'sleight-school-notes';
  var KEY_ACTS = 'sleight-school-acts';

  var learned = [], bookmarks = [], notes = {}, acts = [];

  try { learned = JSON.parse(localStorage.getItem(KEY_LEARNED) || '[]'); } catch(e){ learned = []; }
  try { bookmarks = JSON.parse(localStorage.getItem(KEY_BOOKMARKS) || '[]'); } catch(e){ bookmarks = []; }
  try { notes = JSON.parse(localStorage.getItem(KEY_NOTES) || '{}'); } catch(e){ notes = {}; }
  try { acts = JSON.parse(localStorage.getItem(KEY_ACTS) || '[]'); } catch(e){ acts = []; }

  // Initialize Default Acts if empty
  if (!acts.length) {
    acts = [
      { id: 'jordan-5min', title: "Jordan's 5-Minute Casual Set", tricks: ['t1', 't48', 't38'] },
      { id: 'table-miracles', title: "Close-up Table Miracles", tricks: ['t12', 't19', 't13'] }
    ];
    try { localStorage.setItem(KEY_ACTS, JSON.stringify(acts)); } catch(e){}
  }

  function saveLearned(){ try{ localStorage.setItem(KEY_LEARNED, JSON.stringify(learned)); }catch(e){} }
  function saveBookmarks(){ try{ localStorage.setItem(KEY_BOOKMARKS, JSON.stringify(bookmarks)); }catch(e){} }
  function saveNotes(){ try{ localStorage.setItem(KEY_NOTES, JSON.stringify(notes)); }catch(e){} }
  function saveActs(){ try{ localStorage.setItem(KEY_ACTS, JSON.stringify(acts)); }catch(e){} }

  // Map category for each trick article
  function getTrickCategory(art) {
    var sec = art.closest('section.block');
    if (!sec) return 'Other';
    var h2 = sec.querySelector('h2.sec');
    if (!h2) return 'Other';
    var text = h2.childNodes[0].textContent.trim();
    return text;
  }

  function getTrickDifficulty(art) {
    var badge = art.querySelector('.badge');
    if (!badge) return 'med';
    if (badge.classList.contains('easy')) return 'easy';
    if (badge.classList.contains('hard')) return 'hard';
    return 'med';
  }

  function getTrickTitle(art) {
    var h3 = art.querySelector('h3');
    return h3 ? h3.textContent.trim() : '';
  }

  // --- Filter Engine ---
  var searchInput = getEl('searchInput');
  var clearSearchBtn = getEl('clearSearchBtn');
  var diffFilter = getEl('diffFilter');
  var catFilter = getEl('catFilter');
  var statusFilter = getEl('statusFilter');
  var sortBy = getEl('sortBy');
  var filterCount = getEl('filterCount');
  var resetFiltersBtn = getEl('resetFiltersBtn');

  function applyFilters() {
    var query = ((getEl('searchInput') && getEl('searchInput').value) || '').toLowerCase().trim();
    var diff = getEl('diffFilter') ? getEl('diffFilter').value : 'all';
    var cat = getEl('catFilter') ? getEl('catFilter').value : 'all';
    var status = getEl('statusFilter') ? getEl('statusFilter').value : 'all';
    var sort = getEl('sortBy') ? getEl('sortBy').value : 'default';

    if (getEl('clearSearchBtn')) getEl('clearSearchBtn').classList.toggle('visible', query.length > 0);

    var articles = Array.from(document.querySelectorAll('article.trick'));
    var visibleCount = 0;

    articles.forEach(function(art){
      var id = art.id;
      var title = getTrickTitle(art).toLowerCase();
      var lede = (art.querySelector('.lede')?.textContent || '').toLowerCase();
      var stepsText = (art.querySelector('.steps')?.textContent || '').toLowerCase();
      var noteText = (notes[id] || '').toLowerCase();
      var trickCat = getTrickCategory(art);
      var trickDiff = getTrickDifficulty(art);
      var isLearned = learned.indexOf(id) >= 0;
      var isBm = bookmarks.indexOf(id) >= 0;
      var hasNote = !!notes[id];

      var matchSearch = !query || title.includes(query) || lede.includes(query) || stepsText.includes(query) || noteText.includes(query);
      var matchDiff = (diff === 'all') || (trickDiff === diff);
      var matchCat = (cat === 'all') || (trickCat.toLowerCase().includes(cat.toLowerCase()));

      var matchStatus = true;
      if (status === 'learned') matchStatus = isLearned;
      if (status === 'unlearned') matchStatus = !isLearned;
      if (status === 'bookmarked') matchStatus = isBm;
      if (status === 'hasNotes') matchStatus = hasNote;

      var visible = matchSearch && matchDiff && matchCat && matchStatus;
      art.style.display = visible ? '' : 'none';
      if (visible) visibleCount++;
    });

    if (getEl('filterCount')) getEl('filterCount').textContent = 'Showing ' + visibleCount + ' of ' + articles.length + ' tricks';

    if (sort !== 'default') {
      var container = articles[0]?.parentNode;
      if (container) {
        var sorted = articles.slice().sort(function(a,b){
          if (sort === 'title') {
            return getTrickTitle(a).localeCompare(getTrickTitle(b));
          } else if (sort === 'difficulty') {
            var diffWeight = { easy: 1, med: 2, hard: 3 };
            return diffWeight[getTrickDifficulty(a)] - diffWeight[getTrickDifficulty(b)];
          }
          return 0;
        });
        sorted.forEach(function(a){ container.appendChild(a); });
      }
    }
  }

  if (getEl('searchInput')) getEl('searchInput').addEventListener('input', applyFilters);
  if (getEl('clearSearchBtn')) getEl('clearSearchBtn').addEventListener('click', function(){ getEl('searchInput').value = ''; applyFilters(); });
  if (getEl('diffFilter')) getEl('diffFilter').addEventListener('change', applyFilters);
  if (getEl('catFilter')) getEl('catFilter').addEventListener('change', applyFilters);
  if (getEl('statusFilter')) getEl('statusFilter').addEventListener('change', applyFilters);
  if (getEl('sortBy')) getEl('sortBy').addEventListener('change', applyFilters);
  if (getEl('resetFiltersBtn')) getEl('resetFiltersBtn').addEventListener('click', function(){
    if (getEl('searchInput')) getEl('searchInput').value = '';
    if (getEl('diffFilter')) getEl('diffFilter').value = 'all';
    if (getEl('catFilter')) getEl('catFilter').value = 'all';
    if (getEl('statusFilter')) getEl('statusFilter').value = 'all';
    if (getEl('sortBy')) getEl('sortBy').value = 'default';
    applyFilters();
  });

  // --- Bookmark and Notes UI Handlers ---
  function refreshTricksUI() {
    document.querySelectorAll('article.trick').forEach(function(art){
      var id = art.id;

      var bmBtn = art.querySelector('.bm-btn');
      if (bmBtn) {
        var isBm = bookmarks.indexOf(id) >= 0;
        bmBtn.classList.toggle('bookmarked', isBm);
      }

      var notesBtn = art.querySelector('.notes-toggle-btn');
      if (notesBtn) {
        var hasN = !!notes[id];
        notesBtn.classList.toggle('has-notes', hasN);
      }

      var textarea = art.querySelector('.trick-notes-input');
      if (textarea && textarea.value !== (notes[id] || '')) {
        textarea.value = notes[id] || '';
      }
    });
  }

  document.addEventListener('click', function(e){
    var bmBtn = e.target.closest('.bm-btn');
    if (bmBtn && bmBtn.getAttribute('data-trick')) {
      var id = bmBtn.getAttribute('data-trick');
      var ix = bookmarks.indexOf(id);
      if (ix >= 0) bookmarks.splice(ix, 1);
      else bookmarks.push(id);
      saveBookmarks();
      refreshTricksUI();
      applyFilters();
      return;
    }

    var notesBtn = e.target.closest('.notes-toggle-btn');
    if (notesBtn && notesBtn.getAttribute('data-trick')) {
      var id = notesBtn.getAttribute('data-trick');
      var panel = getEl('notespanel-' + id);
      if (panel) {
        panel.style.display = (panel.style.display === 'none') ? 'block' : 'none';
      }
      return;
    }
  });

  document.addEventListener('input', function(e){
    if (e.target.classList.contains('trick-notes-input')) {
      var id = e.target.getAttribute('data-trick');
      var val = e.target.value.trim();
      if (val) notes[id] = val;
      else delete notes[id];
      saveNotes();

      var status = getEl('notestatus-' + id);
      if (status) {
        status.textContent = 'Saving...';
        setTimeout(function(){ status.textContent = 'Saved'; }, 400);
      }
      refreshTricksUI();
    }
  });

  // --- Modals Controller ---
  function setupModal(modalId, openBtns, closeId) {
    document.addEventListener('click', function(e){
      var modal = getEl(modalId);
      if (!modal) return;

      openBtns.forEach(function(btnId){
        if (e.target.closest('#' + btnId)) {
          modal.classList.add('open');
        }
      });

      if (e.target.closest('#' + closeId)) {
        modal.classList.remove('open');
      }

      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  }

  setupModal('practiceStudioModal', ['openStudioBtn', 'fabStudioBtn'], 'closeStudioBtn');
  setupModal('webcamMirrorModal', ['openMirrorBtn', 'fabMirrorBtn'], 'closeMirrorBtn');
  setupModal('actBuilderModal', ['openActBuilderBtn', 'fabActBtn'], 'closeActBtn');

  if (getEl('fabTopBtn')) getEl('fabTopBtn').addEventListener('click', function(){ window.scrollTo({ top: 0, behavior: 'smooth' }); });

  // --- Practice Studio Controller ---
  var currentStudioDeck = [];
  var currentStudioIndex = 0;
  var currentStudioStep = 0;

  function buildStudioDeck() {
    var type = getEl('studioDeckSelect') ? getEl('studioDeckSelect').value : 'all';
    var articles = Array.from(document.querySelectorAll('article.trick'));

    if (type === 'unlearned') {
      currentStudioDeck = articles.filter(function(a){ return learned.indexOf(a.id) < 0; });
    } else if (type === 'bookmarked') {
      currentStudioDeck = articles.filter(function(a){ return bookmarks.indexOf(a.id) >= 0; });
    } else if (type === 'foundations') {
      currentStudioDeck = articles.filter(function(a){ return getTrickCategory(a).toLowerCase().includes('foundation'); });
    } else if (type === 'moves') {
      currentStudioDeck = articles.filter(function(a){ return getTrickCategory(a).toLowerCase().includes('move'); });
    } else if (type === 'routines') {
      currentStudioDeck = articles.filter(function(a){ return getTrickCategory(a).toLowerCase().includes('routine'); });
    } else {
      currentStudioDeck = articles;
    }

    if (!currentStudioDeck.length) currentStudioDeck = articles;
    currentStudioIndex = 0;
    currentStudioStep = 0;
    renderStudioCard();
  }

  var studioAutoTimer = null;
  function resetStudioAutoAdvance() {
    if (studioAutoTimer) { clearInterval(studioAutoTimer); studioAutoTimer = null; }
    var autoCheck = getEl('studioAutoCheck');
    if (autoCheck && autoCheck.checked) {
      studioAutoTimer = setInterval(function(){
        var art = currentStudioDeck[currentStudioIndex];
        if (!art) return;
        var stepEls = art.querySelectorAll('.steps li');
        if (currentStudioStep < stepEls.length - 1) {
          currentStudioStep++;
        } else if (currentStudioIndex < currentStudioDeck.length - 1) {
          currentStudioIndex++;
          currentStudioStep = 0;
        } else {
          currentStudioIndex = 0;
          currentStudioStep = 0;
        }
        renderStudioCard();
      }, 4000);
    }
  }

  function renderStudioCard() {
    resetStudioAutoAdvance();
    if (!currentStudioDeck.length) return;
    var art = currentStudioDeck[currentStudioIndex];
    var id = art.id;

    if (getEl('studioTrickTitle')) getEl('studioTrickTitle').textContent = getTrickTitle(art);
    if (getEl('studioTrickLede')) getEl('studioTrickLede').textContent = art.querySelector('.lede')?.textContent || '';

    var badgeClass = 'badge ' + getTrickDifficulty(art);
    if (getEl('studioTrickBadge')) {
      getEl('studioTrickBadge').className = badgeClass;
      getEl('studioTrickBadge').textContent = getTrickDifficulty(art).toUpperCase();
    }

    var stepEls = art.querySelectorAll('.steps li');
    if (currentStudioStep >= stepEls.length) currentStudioStep = 0;

    if (getEl('studioStepNum')) getEl('studioStepNum').textContent = 'Step ' + (currentStudioStep + 1) + ' of ' + stepEls.length;
    if (getEl('studioStepText')) getEl('studioStepText').innerHTML = stepEls[currentStudioStep] ? stepEls[currentStudioStep].innerHTML : '';

    if (getEl('studioProgressText')) getEl('studioProgressText').textContent = 'Trick ' + (currentStudioIndex + 1) + ' of ' + currentStudioDeck.length;

    var isL = learned.indexOf(id) >= 0;
    if (getEl('studioLearnedCheckbox')) getEl('studioLearnedCheckbox').checked = isL;
    if (getEl('studioLearnedLabel')) getEl('studioLearnedLabel').textContent = isL ? 'Learned ✓' : 'Mark Learned';

    var isB = bookmarks.indexOf(id) >= 0;
    if (getEl('studioBmBtn')) getEl('studioBmBtn').classList.toggle('bookmarked', isB);
  }

  if (getEl('studioDeckSelect')) getEl('studioDeckSelect').addEventListener('change', buildStudioDeck);
  if (getEl('studioShuffleBtn')) getEl('studioShuffleBtn').addEventListener('click', function(){
    currentStudioIndex = Math.floor(Math.random() * currentStudioDeck.length);
    currentStudioStep = 0;
    renderStudioCard();
  });

  if (getEl('studioPrevStepBtn')) getEl('studioPrevStepBtn').addEventListener('click', function(){
    if (currentStudioStep > 0) {
      currentStudioStep--;
    } else if (currentStudioIndex > 0) {
      currentStudioIndex--;
      currentStudioStep = 0;
    }
    renderStudioCard();
  });

  if (getEl('studioNextStepBtn')) getEl('studioNextStepBtn').addEventListener('click', function(){
    var art = currentStudioDeck[currentStudioIndex];
    var stepEls = art.querySelectorAll('.steps li');
    if (currentStudioStep < stepEls.length - 1) {
      currentStudioStep++;
    } else if (currentStudioIndex < currentStudioDeck.length - 1) {
      currentStudioIndex++;
      currentStudioStep = 0;
    }
    renderStudioCard();
  });

  if (getEl('studioLearnedCheckbox')) getEl('studioLearnedCheckbox').addEventListener('change', function(){
    var art = currentStudioDeck[currentStudioIndex];
    if (!art) return;
    var id = art.id;
    var ix = learned.indexOf(id);
    if (getEl('studioLearnedCheckbox').checked && ix < 0) learned.push(id);
    if (!getEl('studioLearnedCheckbox').checked && ix >= 0) learned.splice(ix, 1);
    saveLearned();
    refreshTricksUI();
    renderStudioCard();
  });

  if (getEl('studioBmBtn')) getEl('studioBmBtn').addEventListener('click', function(){
    var art = currentStudioDeck[currentStudioIndex];
    if (!art) return;
    var id = art.id;
    var ix = bookmarks.indexOf(id);
    if (ix >= 0) bookmarks.splice(ix, 1);
    else bookmarks.push(id);
    saveBookmarks();
    refreshTricksUI();
    renderStudioCard();
  });

  if (getEl('studioJumpToArticleBtn')) getEl('studioJumpToArticleBtn').addEventListener('click', function(){
    var art = currentStudioDeck[currentStudioIndex];
    var studioModal = getEl('practiceStudioModal');
    if (studioModal) studioModal.classList.remove('open');
    if (art) {
      art.scrollIntoView({ behavior: 'smooth', block: 'start' });
      art.classList.remove('reveal');
    }
  });

  if (getEl('studioAutoCheck')) getEl('studioAutoCheck').addEventListener('change', resetStudioAutoAdvance);
  buildStudioDeck();

  // --- Stopwatch Practice Timer ---
  var timerSecs = 0, timerInterval = null;

  function updateTimerDisplay() {
    var m = Math.floor(timerSecs / 60);
    var s = timerSecs % 60;
    if (getEl('studioTimerDisplay')) getEl('studioTimerDisplay').textContent = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }

  if (getEl('timerStartBtn')) getEl('timerStartBtn').addEventListener('click', function(){
    if (timerInterval) return;
    timerInterval = setInterval(function(){
      timerSecs++;
      updateTimerDisplay();
    }, 1000);
  });

  if (getEl('timerPauseBtn')) getEl('timerPauseBtn').addEventListener('click', function(){
    if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
  });

  if (getEl('timerResetBtn')) getEl('timerResetBtn').addEventListener('click', function(){
    if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
    timerSecs = 0;
    updateTimerDisplay();
  });

  // --- Rhythm Metronome ---
  var metroBpm = 90, metroRunning = false, metroSound = true, metroTimer = null, audioCtx = null;

  if (getEl('metroBpmSlider')) getEl('metroBpmSlider').addEventListener('input', function(){
    metroBpm = parseInt(getEl('metroBpmSlider').value, 10);
    if (getEl('metroBpmText')) getEl('metroBpmText').textContent = metroBpm + ' BPM';
    if (metroRunning) { stopMetro(); startMetro(); }
  });

  function playClickSound() {
    if (!metroSound) return;
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      var osc = audioCtx.createOscillator();
      var gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } catch(e){}
  }

  function startMetro() {
    metroRunning = true;
    if (getEl('metroToggleBtn')) getEl('metroToggleBtn').textContent = 'Stop Click';
    var intervalMs = (60 / metroBpm) * 1000;
    metroTimer = setInterval(function(){
      playClickSound();
      if (getEl('metroPulse')) {
        getEl('metroPulse').classList.add('flash');
        setTimeout(function(){ if (getEl('metroPulse')) getEl('metroPulse').classList.remove('flash'); }, 100);
      }
    }, intervalMs);
  }

  function stopMetro() {
    metroRunning = false;
    if (getEl('metroToggleBtn')) getEl('metroToggleBtn').textContent = 'Start Click';
    if (metroTimer) { clearInterval(metroTimer); metroTimer = null; }
  }

  if (getEl('metroToggleBtn')) getEl('metroToggleBtn').addEventListener('click', function(){
    if (metroRunning) stopMetro();
    else startMetro();
  });

  if (getEl('metroSoundToggleBtn')) getEl('metroSoundToggleBtn').addEventListener('click', function(){
    metroSound = !metroSound;
    if (getEl('metroSoundToggleBtn')) getEl('metroSoundToggleBtn').textContent = metroSound ? '🔊 Sound On' : '🔇 Mute';
  });

  // --- Live Webcam Angle Mirror Controller ---
  var webcamStream = null;

  if (getEl('startCamBtn')) getEl('startCamBtn').addEventListener('click', function(){
    var v = getEl('webcamVideo');
    if (webcamStream) {
      webcamStream.getTracks().forEach(function(t){ t.stop(); });
      webcamStream = null;
      if (v) v.srcObject = null;
      getEl('startCamBtn').textContent = 'Start Camera';
      return;
    }
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream){
        webcamStream = stream;
        if (v) v.srcObject = stream;
        getEl('startCamBtn').textContent = 'Stop Camera';
      }).catch(function(err){
        alert('Could not access webcam: ' + err.message);
      });
    } else {
      alert('Webcam API not supported in this browser.');
    }
  });

  if (getEl('toggleMirrorFlipBtn')) getEl('toggleMirrorFlipBtn').addEventListener('click', function(){
    if (getEl('webcamBox')) getEl('webcamBox').classList.toggle('no-mirror');
  });

  if (getEl('toggleGridBtn')) getEl('toggleGridBtn').addEventListener('click', function(){
    if (getEl('webcamOverlay')) getEl('webcamOverlay').classList.toggle('active');
  });

  // --- Act Builder Controller ---
  function populateActDropdowns() {
    var actSelect = getEl('actSelect');
    var addTrickToActSelect = getEl('addTrickToActSelect');
    if (!actSelect || !addTrickToActSelect) return;

    actSelect.innerHTML = '';
    acts.forEach(function(a){
      var opt = document.createElement('option');
      opt.value = a.id;
      opt.textContent = a.title;
      actSelect.appendChild(opt);
    });

    addTrickToActSelect.innerHTML = '<option value="">Select a trick to add...</option>';
    document.querySelectorAll('article.trick').forEach(function(art){
      var opt = document.createElement('option');
      opt.value = art.id;
      opt.textContent = getTrickTitle(art) + ' (' + getTrickDifficulty(art) + ')';
      addTrickToActSelect.appendChild(opt);
    });
  }

  function renderCurrentAct() {
    var actSelect = getEl('actSelect');
    var actListContainer = getEl('actListContainer');
    if (!actSelect || !actListContainer) return;
    var currentActId = actSelect.value;
    var currentAct = acts.find(function(a){ return a.id === currentActId; });
    if (!currentAct) return;

    actListContainer.innerHTML = '';
    currentAct.tricks.forEach(function(tid, idx){
      var art = document.getElementById(tid);
      var title = art ? getTrickTitle(art) : tid;

      var item = document.createElement('div');
      item.className = 'act-item';
      item.innerHTML = '<span class="num">' + (idx + 1) + '.</span>' +
        '<span class="title">' + title + '</span>' +
        '<div class="act-btns">' +
        '<button class="sbtn move-up" data-idx="' + idx + '">↑</button>' +
        '<button class="sbtn move-down" data-idx="' + idx + '">↓</button>' +
        '<button class="sbtn remove-trick" data-idx="' + idx + '">&times;</button>' +
        '</div>';
      actListContainer.appendChild(item);
    });

    if (getEl('actStatsText')) {
      getEl('actStatsText').textContent = currentAct.tricks.length + ' Tricks · Est. ' + (currentAct.tricks.length * 2) + ' minutes';
    }
  }

  if (getEl('actSelect')) getEl('actSelect').addEventListener('change', renderCurrentAct);

  if (getEl('addTrickToActBtn')) getEl('addTrickToActBtn').addEventListener('click', function(){
    var tid = getEl('addTrickToActSelect') ? getEl('addTrickToActSelect').value : '';
    var currentActId = getEl('actSelect') ? getEl('actSelect').value : '';
    var currentAct = acts.find(function(a){ return a.id === currentActId; });
    if (tid && currentAct) {
      currentAct.tricks.push(tid);
      saveActs();
      renderCurrentAct();
    }
  });

  if (getEl('newActBtn')) getEl('newActBtn').addEventListener('click', function(){
    var name = prompt('Enter a title for your new setlist:', 'My Custom Routine');
    if (name) {
      var newAct = { id: 'act-' + Date.now(), title: name, tricks: [] };
      acts.push(newAct);
      saveActs();
      populateActDropdowns();
      if (getEl('actSelect')) getEl('actSelect').value = newAct.id;
      renderCurrentAct();
    }
  });

  if (getEl('actListContainer')) getEl('actListContainer').addEventListener('click', function(e){
    var currentActId = getEl('actSelect') ? getEl('actSelect').value : '';
    var currentAct = acts.find(function(a){ return a.id === currentActId; });
    if (!currentAct) return;

    if (e.target.classList.contains('remove-trick')) {
      var idx = parseInt(e.target.getAttribute('data-idx'), 10);
      currentAct.tricks.splice(idx, 1);
      saveActs(); renderCurrentAct();
    } else if (e.target.classList.contains('move-up')) {
      var idx = parseInt(e.target.getAttribute('data-idx'), 10);
      if (idx > 0) {
        var temp = currentAct.tricks[idx];
        currentAct.tricks[idx] = currentAct.tricks[idx - 1];
        currentAct.tricks[idx - 1] = temp;
        saveActs(); renderCurrentAct();
      }
    } else if (e.target.classList.contains('move-down')) {
      var idx = parseInt(e.target.getAttribute('data-idx'), 10);
      if (idx < currentAct.tricks.length - 1) {
        var temp = currentAct.tricks[idx];
        currentAct.tricks[idx] = currentAct.tricks[idx + 1];
        currentAct.tricks[idx + 1] = temp;
        saveActs(); renderCurrentAct();
      }
    }
  });

  if (getEl('runActInStudioBtn')) getEl('runActInStudioBtn').addEventListener('click', function(){
    var currentActId = getEl('actSelect') ? getEl('actSelect').value : '';
    var currentAct = acts.find(function(a){ return a.id === currentActId; });
    if (!currentAct || !currentAct.tricks.length) return;

    currentStudioDeck = currentAct.tricks.map(function(tid){ return document.getElementById(tid); }).filter(Boolean);
    currentStudioIndex = 0;
    currentStudioStep = 0;
    renderStudioCard();

    var actModal = getEl('actBuilderModal');
    var studioModal = getEl('practiceStudioModal');
    if (actModal) actModal.classList.remove('open');
    if (studioModal) studioModal.classList.add('open');
  });

  populateActDropdowns();
  renderCurrentAct();
  refreshTricksUI();

})();

refresh();

})();

// Expose Player mounter for lazy load
window.mountAnimPlayer = function(el) {
  if (!el || el.classList.contains("mounted")) return;
  if (typeof Player !== "function" || typeof ANIMS === "undefined") return;
  var key = el.getAttribute("data-anim");
  if (!key || !ANIMS[key]) return;
  el.classList.add("mounted");
  el.innerHTML = "";
  try { new Player(el, ANIMS[key]); } catch (e) { console.warn("Player", key, e); }
};

document.addEventListener('DOMContentLoaded', () => {
    const STORAGE_KEY = 'scomofo_card_tricks_progress';

    // Load saved state (checkboxes flat by id, rep counts under `counts`)
    let savedStates = {};
    try {
        savedStates = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
        savedStates = {};
    }
    if (typeof savedStates !== 'object' || savedStates === null) savedStates = {};
    const counts = (savedStates.counts && typeof savedStates.counts === 'object') ? savedStates.counts : {};

    const checkboxes = document.querySelectorAll('#practice-tracker input[type="checkbox"]');
    const fill = document.getElementById('trackerFill');
    const text = document.getElementById('trackerText');

    function persist() {
        savedStates.counts = counts;
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(savedStates));
        } catch (e) { /* storage unavailable; tracking just won't persist */ }
    }

    // Checkbox-based progress: "N of 16 milestones"
    function updateProgress() {
        let done = 0;
        checkboxes.forEach(checkbox => { if (checkbox.checked) done++; });
        if (fill) fill.style.width = (checkboxes.length ? (done / checkboxes.length) * 100 : 0) + '%';
        if (text) text.textContent = done + ' of ' + checkboxes.length + ' milestones';
    }

    // Restore checkbox states, save on every change
    checkboxes.forEach(checkbox => {
        if (savedStates[checkbox.id] !== undefined) {
            checkbox.checked = !!savedStates[checkbox.id];
        }
        checkbox.addEventListener('change', () => {
            savedStates[checkbox.id] = checkbox.checked;
            persist();
            updateProgress();
        });
    });

    // Rep counters: reaching the target auto-checks the milestone;
    // dropping back below never unchecks it (unchecking is the user's call)
    document.querySelectorAll('#practice-tracker .reps').forEach(rep => {
        const id = rep.getAttribute('data-for');
        const target = parseInt(rep.getAttribute('data-target'), 10) || 0;
        const readout = rep.querySelector('.rep-count');
        const box = document.getElementById(id);
        let n = parseInt(counts[id], 10) || 0;
        if (n < 0) n = 0;
        if (n > target) n = target;

        function render() {
            if (readout) readout.textContent = n + ' / ' + target;
        }
        render();

        rep.querySelectorAll('.rep-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const delta = parseInt(btn.getAttribute('data-delta'), 10) || 0;
                n = Math.min(target, Math.max(0, n + delta));
                counts[id] = n;
                if (n >= target && box && !box.checked) {
                    box.checked = true;
                    savedStates[id] = true;
                }
                persist();
                render();
                updateProgress();
            });
        });
    });

    updateProgress();
});

/* ===== Sleight School feature pack ===== */
(function(){
  "use strict";

  // --- Tag inference from title/section ---
  function inferTags(art) {
    var id = art.id || "";
    var title = (art.querySelector("h3") && art.querySelector("h3").textContent || "").toLowerCase();
    var tags = [];
    var sec = art.closest("section");
    var secId = sec && sec.id || "";
    var secText = (sec && sec.querySelector("h2") && sec.querySelector("h2").textContent || "").toLowerCase();

    if (/force|cut-deeper|10–19|10-19|classic force|riffle force|hindu.*force|under-the-spread/.test(title)) tags.push("force");
    if (/control|break|pass|palm|side steal|cull|top change|double lift|glide|peek/.test(title)) tags.push("control");
    if (/shuffle|faro|riffle|overhand|hindu shuffle|wash|bridge/.test(title)) tags.push("shuffle");
    if (/self-worker|spell|mathematical|si stebbins|key card|21 card|do as i|princess/.test(title) || /self-worker/.test(secText)) tags.push("self-worker");
    if (secId === "cardistry" || /cardistry|fan|spring|waterfall|sybil|flourish|scissor|helicopter|lepaul|biddle grip|mechanic/.test(title) || /flourish/.test(secText)) tags.push("cardistry");
    if (secId === "one-hand-spring" || /^ohs:|one-hand spring|one hand spring/.test(title)) tags.push("ohs");
    if (/beginner|easy/.test((art.querySelector(".badge") || {}).className || "") || art.querySelector(".badge.easy")) tags.push("beginner-path");
    // starter path ids
    var starters = {t1:1,t2:1,t4:1,t5:1,t195:1,t196:1,t10:1,t26:1,t160:1,t203:1};
    if (starters[id]) tags.push("beginner-path");
    return tags;
  }

  function injectTags() {
    document.querySelectorAll("article.trick").forEach(function(art){
      if (art.querySelector(".tag-row")) return;
      var tags = inferTags(art);
      art.setAttribute("data-tags", tags.join(" "));
      if (!tags.length) return;
      var row = document.createElement("div");
      row.className = "tag-row";
      tags.forEach(function(t){
        var s = document.createElement("span");
        s.className = "tag tag-" + t;
        s.textContent = t.replace("-", " ");
        row.appendChild(s);
      });
      var lede = art.querySelector(".lede");
      if (lede) lede.insertAdjacentElement("afterend", row);
      else {
        var h3 = art.querySelector("h3");
        if (h3) h3.insertAdjacentElement("afterend", row);
      }
    });
  }

  // --- Angle notes for sleight-heavy cards ---
  function injectAngles() {
    var defaults = {
      force: "Danger angles: audience above or hard left/right can expose a push-off or blocked index. Keep the deck chest-high and square to the room.",
      control: "Danger angles: left and right sides often flash breaks or jogs. Keep the front edge toward the audience; avoid over-rotating the deck.",
      palm: "Danger angles: the right side and below are most sensitive. Keep the palming hand natural and the arm relaxed against the body.",
      cardistry: "Display angles: prefer front or slight 3/4. Overhead cameras hide depth; phone front camera is ideal for practice film.",
      ohs: "Film from the side to judge arc and stream. Front view hides bow depth and spray direction."
    };
    document.querySelectorAll("article.trick").forEach(function(art){
      if (art.querySelector(".angle-box")) return;
      var tags = (art.getAttribute("data-tags") || "").split(/\s+/);
      var msg = "";
      if (tags.indexOf("ohs") >= 0) msg = defaults.ohs;
      else if (tags.indexOf("cardistry") >= 0) msg = defaults.cardistry;
      else if (tags.indexOf("force") >= 0) msg = defaults.force;
      else if (tags.indexOf("control") >= 0) msg = defaults.control;
      if (!msg) return;
      var box = document.createElement("div");
      box.className = "angle-box";
      box.innerHTML = "<b>Angles / flash.</b> " + msg;
      var steps = art.querySelector("ol.steps");
      if (steps) steps.insertAdjacentElement("afterend", box);
      else art.appendChild(box);
    });
  }

  // --- Export progress ---
  function exportProgress() {
    var data = {
      exportedAt: new Date().toISOString(),
      learned: JSON.parse(localStorage.getItem("sleight-school-learned") || "[]"),
      bookmarks: JSON.parse(localStorage.getItem("sleight-school-bookmarks") || localStorage.getItem("scomofo_card_tricks_bookmarks") || "[]"),
      notes: JSON.parse(localStorage.getItem("sleight-school-notes") || "{}")
    };
    var blob = new Blob([JSON.stringify(data, null, 2)], {type: "application/json"});
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "sleight-school-progress.json";
    a.click();
    URL.revokeObjectURL(a.href);
  }

  // --- Daily drill (practice 2.0) ---
  function dailyDrill() {
    var arts = Array.from(document.querySelectorAll("article.trick"));
    var learned = [];
    try { learned = JSON.parse(localStorage.getItem("sleight-school-learned") || "[]"); } catch(e){}
    var unlearned = arts.filter(function(a){ return learned.indexOf(a.id) < 0; });
    var pool = unlearned.length ? unlearned : arts;
    // shuffle
    for (var i = pool.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = pool[i]; pool[i] = pool[j]; pool[j] = t;
    }
    var pick = pool.slice(0, 5);
    // hide all then show pick
    arts.forEach(function(a){ a.style.display = "none"; });
    pick.forEach(function(a){ a.style.display = ""; });
    var fc = document.getElementById("filterCount");
    if (fc) fc.textContent = "Daily drill: " + pick.length + " cards";
    if (pick[0]) pick[0].scrollIntoView({behavior: "smooth", block: "start"});
  }

  function showChallenge(tag) {
    var arts = Array.from(document.querySelectorAll("article.trick"));
    var n = 0;
    arts.forEach(function(a){
      var tags = (a.getAttribute("data-tags") || "");
      var ok = tag === "all" || tags.split(/\s+/).indexOf(tag) >= 0;
      // special challenges
      if (tag === "week1-self") ok = tags.indexOf("self-worker") >= 0 || tags.indexOf("beginner-path") >= 0;
      if (tag === "cardistry-foundations") ok = tags.indexOf("cardistry") >= 0 && tags.indexOf("ohs") < 0;
      a.style.display = ok ? "" : "none";
      if (ok) n++;
    });
    var fc = document.getElementById("filterCount");
    if (fc) fc.textContent = "Challenge: " + n + " cards";
  }

  // --- Lazy-load animations ---
  function lazyPlayers() {
    var nodes = document.querySelectorAll(".animplayer[data-anim]");
    nodes.forEach(function(el){ el.setAttribute("data-lazy", "1"); });
    if (!("IntersectionObserver" in window)) {
      nodes.forEach(function(el){ mountPlayer(el); });
      return;
    }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if (en.isIntersecting) {
          mountPlayer(en.target);
          io.unobserve(en.target);
        }
      });
    }, {rootMargin: "100px", threshold: 0.05});
    nodes.forEach(function(el){ io.observe(el); });
  }

  function mountPlayer(el) {
    if (el.classList.contains("mounted")) return;
    el.classList.add("mounted");
    // Existing Player bootstrap: dispatch event or call global if present
    if (typeof window.mountAnimPlayer === "function") {
      window.mountAnimPlayer(el);
      return;
    }
    // Fallback: trigger click rebuild if Player scans on load only — re-run common init
    if (typeof window.Player === "function" && typeof ANIMS !== "undefined") {
      var key = el.getAttribute("data-anim");
      if (key && ANIMS[key]) {
        try { new Player(el, ANIMS[key]); } catch(e) { console.warn(e); }
      }
    }
  }

  // --- Wire tools UI ---
  function ensureTools() {
    var host = document.querySelector(".filter-bar") || document.querySelector("#filterCount") || document.querySelector("nav.toc");
    if (!host || document.getElementById("dailyDrill")) return;
    var row = document.createElement("div");
    row.className = "tools-row";
    row.innerHTML = '<button type="button" id="dailyDrill">Today\'s 5</button>' +
      '<button type="button" id="exportProgressBtn">Export progress</button>' +
      '<button type="button" id="resetViewBtn">Show all</button>';
    host.parentNode.insertBefore(row, host.nextSibling);
    document.getElementById("dailyDrill").onclick = dailyDrill;
    document.getElementById("exportProgressBtn").onclick = exportProgress;
    document.getElementById("resetViewBtn").onclick = function(){
      document.querySelectorAll("article.trick").forEach(function(a){ a.style.display = ""; });
      var fc = document.getElementById("filterCount");
      var n = document.querySelectorAll("article.trick").length;
      if (fc) fc.textContent = "Showing " + n + " of " + n + " tricks";
    };
  }

  function wireChallenges() {
    document.querySelectorAll("[data-challenge]").forEach(function(btn){
      btn.addEventListener("click", function(){
        showChallenge(btn.getAttribute("data-challenge"));
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function(){
    injectTags();
    injectAngles();
    ensureTools();
    wireChallenges();
    // lazy after a tick so Player class exists
    setTimeout(lazyPlayers, 0);
  });
})();
