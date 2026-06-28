document.addEventListener('DOMContentLoaded', function() {

  var infoEmpty = document.getElementById('infoEmpty');
  var infoContent = document.getElementById('infoContent');
  var infoPanel = document.getElementById('infoPanel');
  var infoEyebrow = document.getElementById('infoEyebrow');
  var infoTitle = document.getElementById('infoTitle');
  var infoSub = document.getElementById('infoSub');
  var infoBody = document.getElementById('infoBody');

  function renderEntity(key) {
    var entity = TKU_ENTITIES[key];
    if (!entity) return;

    infoEmpty.style.display = 'none';
    infoContent.style.display = 'block';
    infoPanel.classList.remove('active');

    infoEyebrow.textContent = entity.sub;
    infoTitle.textContent = entity.label;
    infoSub.textContent = '';
    infoBody.innerHTML = '';

    entity.body.forEach(function(paragraph) {
      var p = document.createElement('p');
      var isQuote = paragraph.indexOf('\u201c') === 0 || paragraph.indexOf('"') === 0;
      if (isQuote) p.className = 'quote';
      p.textContent = paragraph;
      infoBody.appendChild(p);
    });

    requestAnimationFrame(function() {
      infoPanel.classList.add('active');
    });
  }

  window.tkuOnEntityClick = function(key) {
    renderEntity(key);
  };

  document.getElementById('btnSide').addEventListener('click', function() {
    if (window.tkuSetView) window.tkuSetView('side');
  });
  document.getElementById('btnTop').addEventListener('click', function() {
    if (window.tkuSetView) window.tkuSetView('top');
  });
  document.getElementById('btnWide').addEventListener('click', function() {
    if (window.tkuSetView) window.tkuSetView('wide');
  });

  var tuTuongGrid = document.getElementById('tuTuongGrid');
  var ttModalOverlay = document.getElementById('ttModalOverlay');
  var ttModalClose = document.getElementById('ttModalClose');
  var ttModalEyebrow = document.getElementById('ttModalEyebrow');
  var ttModalTitle = document.getElementById('ttModalTitle');
  var ttModalSub = document.getElementById('ttModalSub');
  var ttModalRole = document.getElementById('ttModalRole');
  var ttModalDetail = document.getElementById('ttModalDetail');
  var ttModalHoaGiap = document.getElementById('ttModalHoaGiap');

  Object.keys(TKU_TU_TUONG).forEach(function(key) {
    var tt = TKU_TU_TUONG[key];
    var card = document.createElement('button');
    card.className = 'tt-card';
    card.innerHTML =
      '<p class="tt-card-label">' + tt.label + '</p>' +
      '<p class="tt-card-sub">' + tt.sub + '</p>' +
      '<p class="tt-card-count">' + tt.count + '</p>' +
      '<p class="tt-card-count-label">Hoa Giáp</p>';
    card.addEventListener('click', function() {
      openTuTuongModal(key);
    });
    tuTuongGrid.appendChild(card);
  });

  function openTuTuongModal(key) {
    var tt = TKU_TU_TUONG[key];
    if (!tt) return;
    ttModalEyebrow.textContent = tt.sub;
    ttModalTitle.textContent = tt.label;
    ttModalSub.textContent = tt.count + ' Hoa Giáp';
    ttModalRole.textContent = tt.role;
    ttModalDetail.textContent = tt.detail;
    ttModalHoaGiap.textContent = tt.hoaGiapNote;
    ttModalOverlay.classList.add('open');
  }

  function closeTuTuongModal() {
    ttModalOverlay.classList.remove('open');
  }

  ttModalClose.addEventListener('click', closeTuTuongModal);
  ttModalOverlay.addEventListener('click', function(e) {
    if (e.target === ttModalOverlay) closeTuTuongModal();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeTuTuongModal();
  });
});
