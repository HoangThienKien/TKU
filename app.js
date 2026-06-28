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
      pill.innerHTML = hg.name + ' <span class="hg-pill-years">· ' + hg.years.join(' / ') + '</span>';
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

  var nguHanhGrid = document.getElementById('nguHanhGrid');
  var nhModalOverlay = document.getElementById('nhModalOverlay');
  var nhModalClose = document.getElementById('nhModalClose');
  var nhModalEyebrow = document.getElementById('nhModalEyebrow');
  var nhModalTitle = document.getElementById('nhModalTitle');
  var nhModalNapAmList = document.getElementById('nhModalNapAmList');

  Object.keys(TKU_NGU_HANH).forEach(function(key) {
    var nh = TKU_NGU_HANH[key];
    var card = document.createElement('button');
    card.className = 'nh-card';
    card.innerHTML =
      '<span class="nh-card-dot" style="background:' + nh.color + '"></span>' +
      '<p class="nh-card-label">' + nh.label + '</p>' +
      '<p class="nh-card-sub">' + nh.en + '</p>';
    card.addEventListener('click', function() {
      openNguHanhModal(key);
    });
    nguHanhGrid.appendChild(card);
  });

  function napAmKeysForHanh(hanhKey) {
    return Object.keys(TKU_NAP_AM).filter(function(naKey) {
      return TKU_NAP_AM[naKey].hanh === hanhKey;
    });
  }

  function openNguHanhModal(key) {
    var nh = TKU_NGU_HANH[key];
    if (!nh) return;
    nhModalEyebrow.textContent = nh.en;
    nhModalTitle.textContent = nh.label;
    nhModalNapAmList.innerHTML = '';

    var naKeys = napAmKeysForHanh(key);
    if (naKeys.length === 0) {
      var note = document.createElement('p');
      note.className = 'hg-pill-years';
      note.textContent = 'Chưa có dữ liệu Nạp Âm mẫu cho hành này.';
      nhModalNapAmList.appendChild(note);
      return;
    }
    naKeys.forEach(function(naKey) {
      var na = TKU_NAP_AM[naKey];
      var item = document.createElement('div');
      item.className = 'nap-am-item';
      var pillsContainer = document.createElement('div');
      item.innerHTML =
        '<p class="nap-am-item-label">' + na.label + '</p>' +
        '<p class="nap-am-item-meaning">' + na.meaning + '</p>';
      item.appendChild(pillsContainer);
      nhModalNapAmList.appendChild(item);
      var validHgKeys = na.hoaGiap.filter(function(hgKey) { return TKU_HOA_GIAP[hgKey]; });
      renderHoaGiapPillRow(pillsContainer, validHgKeys);
    });
  }

  function closeNguHanhModal() {
    nhModalOverlay.classList.remove('open');
  }
  nhModalClose.addEventListener('click', closeNguHanhModal);
  nhModalOverlay.addEventListener('click', function(e) {
    if (e.target === nhModalOverlay) closeNguHanhModal();
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
    hg.years.forEach(function(y) {
      var chip = document.createElement('span');
      chip.className = 'hg-year-chip';
      chip.textContent = y;
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
    closeNguHanhModal();
    closeHoaGiapModal();
  });
});
