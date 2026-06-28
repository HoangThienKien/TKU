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

  var loreTitle = document.getElementById('loreTitle');
  var loreBody = document.getElementById('loreBody');
  loreTitle.textContent = TKU_LORE_SUMMARY.title;
  TKU_LORE_SUMMARY.paragraphs.forEach(function(paragraph) {
    var p = document.createElement('p');
    p.textContent = paragraph;
    loreBody.appendChild(p);
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

  function hoaGiapKeysForTuTuong(ttKey) {
    return Object.keys(TKU_HOA_GIAP).filter(function(hgKey) {
      return TKU_HOA_GIAP[hgKey].tuTuong === ttKey;
    });
  }

  function renderHoaGiapPillRow(container, hgKeys) {
    container.innerHTML = '';
    if (hgKeys.length === 0) {
      var note = document.createElement('p');
      note.className = 'hg-pill-years';
      note.textContent = 'Chưa có dữ liệu Hoa Giáp mẫu cho nhóm này.';
      container.appendChild(note);
      return;
    }
    var row = document.createElement('div');
    row.className = 'hg-pill-row';
    hgKeys.forEach(function(hgKey) {
      var hg = TKU_HOA_GIAP[hgKey];
      var pill = document.createElement('button');
      pill.className = 'hg-pill';
      var yearsLabel = hg.years.length >= 2 ? hg.years[1] + ' / ' + hg.years[2] : hg.years.join(' / ');
      pill.innerHTML = hg.name + ' <span class="hg-pill-years">· ' + yearsLabel + '</span>';
      pill.addEventListener('click', function() {
        openHoaGiapModal(hgKey);
      });
      row.appendChild(pill);
    });
    container.appendChild(row);
  }

  function openTuTuongModal(key) {
    var tt = TKU_TU_TUONG[key];
    if (!tt) return;
    ttModalEyebrow.textContent = tt.sub;
    ttModalTitle.textContent = tt.label;
    ttModalSub.textContent = tt.count + ' Hoa Giáp';
    ttModalRole.textContent = tt.role;
    ttModalDetail.textContent = tt.detail;
    ttModalHoaGiap.textContent = tt.hoaGiapNote;
    renderHoaGiapPillRow(document.getElementById('ttModalHoaGiapPills'), hoaGiapKeysForTuTuong(key));
    ttModalOverlay.classList.add('open');
  }

  function closeTuTuongModal() {
    ttModalOverlay.classList.remove('open');
  }

  ttModalClose.addEventListener('click', closeTuTuongModal);
  ttModalOverlay.addEventListener('click', function(e) {
    if (e.target === ttModalOverlay) closeTuTuongModal();
  });

  var nguHanhAccordion = document.getElementById('nguHanhAccordion');

  function napAmKeysForHanh(hanhKey) {
    return Object.keys(TKU_NAP_AM).filter(function(naKey) {
      return TKU_NAP_AM[naKey].hanh === hanhKey;
    });
  }

  Object.keys(TKU_NGU_HANH).forEach(function(key) {
    var nh = TKU_NGU_HANH[key];
    var item = document.createElement('div');
    item.className = 'nh-item';

    var header = document.createElement('button');
    header.className = 'nh-item-header';
    header.innerHTML =
      '<span class="nh-card-dot" style="background:' + nh.color + '"></span>' +
      '<p class="nh-item-label">' + nh.label + '</p>' +
      '<span class="nh-item-sub">' + nh.en + '</span>' +
      '<span class="nh-item-chevron">&#9662;</span>';

    var panel = document.createElement('div');
    panel.className = 'nh-item-panel';
    var panelInner = document.createElement('div');
    panelInner.className = 'nh-item-panel-inner';
    panel.appendChild(panelInner);

    var naKeys = napAmKeysForHanh(key);
    if (naKeys.length === 0) {
      var note = document.createElement('p');
      note.className = 'hg-pill-years';
      note.textContent = 'Chưa có dữ liệu Nạp Âm mẫu cho hành này.';
      panelInner.appendChild(note);
    } else {
      var napAmList = document.createElement('div');
      napAmList.className = 'nap-am-list';
      naKeys.forEach(function(naKey) {
        var na = TKU_NAP_AM[naKey];
        var naItem = document.createElement('div');
        naItem.className = 'nap-am-item';
        var pillsContainer = document.createElement('div');
        naItem.innerHTML =
          '<p class="nap-am-item-label">' + na.label + '</p>' +
          '<p class="nap-am-item-meaning">' + na.meaning + '</p>';
        naItem.appendChild(pillsContainer);
        napAmList.appendChild(naItem);
        var validHgKeys = na.hoaGiap.filter(function(hgKey) { return TKU_HOA_GIAP[hgKey]; });
        renderHoaGiapPillRow(pillsContainer, validHgKeys);
      });
      panelInner.appendChild(napAmList);
    }

    header.addEventListener('click', function() {
      var wasOpen = item.classList.contains('open');
      nguHanhAccordion.querySelectorAll('.nh-item.open').forEach(function(el) {
        el.classList.remove('open');
      });
      if (!wasOpen) item.classList.add('open');
    });

    item.appendChild(header);
    item.appendChild(panel);
    nguHanhAccordion.appendChild(item);
  });

  var hgModalOverlay = document.getElementById('hgModalOverlay');
  var hgModalClose = document.getElementById('hgModalClose');

  function openHoaGiapModal(hgKey) {
    var hg = TKU_HOA_GIAP[hgKey];
    if (!hg) return;

    document.getElementById('hgModalEyebrow').textContent = '#' + hg.stt + ' · ' + hg.amDuong + ' · ' + hg.archetype;
    document.getElementById('hgModalTitle').textContent = hg.name;
    document.getElementById('hgModalSub').textContent = TKU_NAP_AM[hg.napAm] ? TKU_NAP_AM[hg.napAm].label + ' — ' + hg.meaning : hg.meaning;

    var yearsEl = document.getElementById('hgModalYears');
    yearsEl.innerHTML = '';
    var yearLabels = ['Quá khứ', 'Quá khứ', 'Hiện tại', 'Tương lai'];
    hg.years.forEach(function(y, idx) {
      var chip = document.createElement('span');
      chip.className = 'hg-year-chip';
      chip.innerHTML = y + ' <span class="hg-pill-years">' + (yearLabels[idx] || '') + '</span>';
      yearsEl.appendChild(chip);
    });

    document.getElementById('hgTinhCach').textContent = hg.tinhCach;
    document.getElementById('hgDongLuc').textContent = hg.dongLuc;
    document.getElementById('hgNoiSo').textContent = hg.noiSo;
    document.getElementById('hgManh').textContent = hg.manh;
    document.getElementById('hgYeu').textContent = hg.yeu;
    document.getElementById('hgArc').textContent = hg.arc;
    document.getElementById('hgQueBirth').textContent = hg.queBirth;
    document.getElementById('hgQueTrial').textContent = hg.queTrial;
    document.getElementById('hgQueAwakening').textContent = hg.queAwakening;

    var maAnList = document.getElementById('hgMaAnList');
    maAnList.innerHTML = '';
    hg.maAn.forEach(function(ma) {
      var mvInfo = TKU_MA_VUONG[ma.ma];
      var card = document.createElement('div');
      card.className = 'ma-an-card';
      card.innerHTML =
        '<span class="ma-an-dot" style="background:' + (mvInfo ? mvInfo.color : '#888') + '"></span>' +
        '<div><p class="ma-an-name">' + ma.ten + ' <span class="hg-pill-years">(' + (mvInfo ? mvInfo.label : '') + ')</span></p>' +
        '<p class="ma-an-desc">' + ma.giai + '</p></div>';
      maAnList.appendChild(card);
    });

    var ttLabel = TKU_TU_TUONG[hg.tuTuong] ? TKU_TU_TUONG[hg.tuTuong].label : '';
    document.getElementById('hgFaction').textContent = hg.faction + ' · ' + hg.symbol + ' · Tứ Tượng: ' + ttLabel;

    hgModalOverlay.classList.add('open');
  }

  function closeHoaGiapModal() {
    hgModalOverlay.classList.remove('open');
  }
  hgModalClose.addEventListener('click', closeHoaGiapModal);
  hgModalOverlay.addEventListener('click', function(e) {
    if (e.target === hgModalOverlay) closeHoaGiapModal();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key !== 'Escape') return;
    closeTuTuongModal();
    closeHoaGiapModal();
  });
});
