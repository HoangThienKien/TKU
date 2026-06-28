(function() {
  function init() {
    if (typeof THREE === 'undefined') { setTimeout(init, 200); return; }

    var container = document.getElementById('tkuCanvasHost');
    var w = container.clientWidth || 800, h = container.clientHeight || 640;

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    var key = new THREE.PointLight(0xfff2e0, 1.3, 40);
    key.position.set(5, 6, 5);
    scene.add(key);

    var turns = 5, pointsPerTurn = 48, totalPoints = turns * pointsPerTurn;
    var radius = 1.6, height = 13;
    var topY = height / 2, bottomY = -height / 2;

    function helixPoint(i, phase) {
      var t = i / totalPoints;
      var angle = t * turns * Math.PI * 2 + phase;
      var y = (t - 0.5) * height;
      return new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
    }

    var rotor = new THREE.Group();
    scene.add(rotor);

    var pickable = [];

    function buildStrand(phase, color, entityKey) {
      var pts = [];
      for (var i = 0; i <= totalPoints; i++) pts.push(helixPoint(i, phase));
      var curve = new THREE.CatmullRomCurve3(pts);
      var geo = new THREE.TubeGeometry(curve, 360, 0.06, 8, false);
      var mat = new THREE.MeshStandardMaterial({ color: color, emissive: color, emissiveIntensity: 0.18 });
      var mesh = new THREE.Mesh(geo, mat);
      mesh.userData.entityKey = entityKey;
      mesh.userData.baseEmissive = 0.18;
      mesh.userData.baseColor = color;
      pickable.push(mesh);
      return mesh;
    }

    var strandYThuc = buildStrand(0, 0xF2A623, 'yThuc');
    var strandHuVo = buildStrand(Math.PI, 0x6b7bb8, 'huVo');
    rotor.add(strandYThuc);
    rotor.add(strandHuVo);

    var axisGeo = new THREE.CylinderGeometry(0.045, 0.045, height, 10);
    var axisMat = new THREE.MeshStandardMaterial({ color: 0xD85A30, transparent: true, opacity: 0.55, emissive: 0xD85A30, emissiveIntensity: 0.3 });
    var axisMesh = new THREE.Mesh(axisGeo, axisMat);
    axisMesh.userData.entityKey = 'dungQuan';
    axisMesh.userData.baseEmissive = 0.3;
    axisMesh.userData.baseColor = 0xD85A30;
    pickable.push(axisMesh);
    rotor.add(axisMesh);

    function makeGlowSphere(pos, color, size, entityKey) {
      var geo = new THREE.SphereGeometry(size, 20, 20);
      var mat = new THREE.MeshBasicMaterial({ color: color });
      var mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(pos);
      mesh.userData.entityKey = entityKey;
      mesh.userData.baseColor = color;
      var light = new THREE.PointLight(color, 1.0, 5);
      mesh.add(light);
      pickable.push(mesh);
      return mesh;
    }

    var nhanPos = new THREE.Vector3(-0.55, topY + 1.4, 0);
    var quaPos = new THREE.Vector3(0.55, topY + 1.4, 0);
    var nhanMesh = makeGlowSphere(nhanPos, 0xD4537E, 0.2, 'nhan');
    var quaMesh = makeGlowSphere(quaPos, 0x378ADD, 0.2, 'qua');
    scene.add(nhanMesh);
    scene.add(quaMesh);

    function makeConnector(p1, p2, color) {
      var geo = new THREE.BufferGeometry().setFromPoints([p1, p2]);
      var mat = new THREE.LineBasicMaterial({ color: color, transparent: true, opacity: 0.5 });
      return new THREE.Line(geo, mat);
    }
    var topCenter = new THREE.Vector3(0, topY, 0);
    scene.add(makeConnector(nhanPos, topCenter, 0xD4537E));
    scene.add(makeConnector(quaPos, topCenter, 0x378ADD));
    scene.add(makeConnector(nhanPos, quaPos, 0x888780));

    function makeTextSprite(text, color) {
      var canvas = document.createElement('canvas');
      canvas.width = 256; canvas.height = 64;
      var ctx = canvas.getContext('2d');
      ctx.font = '32px sans-serif';
      ctx.fillStyle = color;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, 128, 32);
      var tex = new THREE.CanvasTexture(canvas);
      var mat = new THREE.SpriteMaterial({ map: tex, transparent: true });
      var sprite = new THREE.Sprite(mat);
      sprite.scale.set(1.4, 0.35, 1);
      return sprite;
    }
    var nhanLabel = makeTextSprite('Nhân', '#F4C0D1');
    nhanLabel.position.copy(nhanPos).add(new THREE.Vector3(0, 0.45, 0));
    scene.add(nhanLabel);
    var quaLabel = makeTextSprite('Quả', '#B5D4F4');
    quaLabel.position.copy(quaPos).add(new THREE.Vector3(0, 0.45, 0));
    scene.add(quaLabel);

    var spaceBarY = bottomY - 1.0;
    var spaceP1 = new THREE.Vector3(-radius, spaceBarY, 0);
    var spaceP2 = new THREE.Vector3(radius, spaceBarY, 0);
    scene.add(makeConnector(spaceP1, spaceP2, 0x639922));
    scene.add(makeConnector(new THREE.Vector3(-radius, spaceBarY - 0.15, 0), new THREE.Vector3(-radius, spaceBarY + 0.15, 0), 0x639922));
    scene.add(makeConnector(new THREE.Vector3(radius, spaceBarY - 0.15, 0), new THREE.Vector3(radius, spaceBarY + 0.15, 0), 0x639922));
    var spaceLabel = makeTextSprite('Không Gian', '#C0DD97');
    spaceLabel.position.set(0, spaceBarY - 0.4, 0);
    spaceLabel.scale.set(1.6, 0.4, 1);
    scene.add(spaceLabel);

    var spaceHitGeo = new THREE.CylinderGeometry(0.25, 0.25, radius * 2.4, 8);
    var spaceHitMat = new THREE.MeshBasicMaterial({ visible: false });
    var spaceHit = new THREE.Mesh(spaceHitGeo, spaceHitMat);
    spaceHit.rotation.z = Math.PI / 2;
    spaceHit.position.set(0, spaceBarY, 0);
    spaceHit.userData.entityKey = 'khongGian';
    pickable.push(spaceHit);
    scene.add(spaceHit);

    var timeBarX = radius + 1.0;
    var oneTurnY1 = helixPoint(0, 0).y;
    var oneTurnY2 = helixPoint(pointsPerTurn, 0).y;
    scene.add(makeConnector(new THREE.Vector3(timeBarX, oneTurnY1, 0), new THREE.Vector3(timeBarX, oneTurnY2, 0), 0x378ADD));
    scene.add(makeConnector(new THREE.Vector3(timeBarX - 0.15, oneTurnY1, 0), new THREE.Vector3(timeBarX + 0.15, oneTurnY1, 0), 0x378ADD));
    scene.add(makeConnector(new THREE.Vector3(timeBarX - 0.15, oneTurnY2, 0), new THREE.Vector3(timeBarX + 0.15, oneTurnY2, 0), 0x378ADD));
    var timeLabel = makeTextSprite('Thời Gian', '#85B7EB');
    timeLabel.position.set(timeBarX + 0.95, (oneTurnY1 + oneTurnY2) / 2, 0);
    timeLabel.scale.set(1.5, 0.38, 1);
    scene.add(timeLabel);

    var timeHitGeo = new THREE.CylinderGeometry(0.25, 0.25, Math.abs(oneTurnY1 - oneTurnY2) * 1.3, 8);
    var timeHit = new THREE.Mesh(timeHitGeo, spaceHitMat);
    timeHit.position.set(timeBarX, (oneTurnY1 + oneTurnY2) / 2, 0);
    timeHit.userData.entityKey = 'thoiGian';
    pickable.push(timeHit);
    scene.add(timeHit);

    var MAVUONG_TYPES = [
      { name: 'tham', color: 0xEF9F27 },
      { name: 'san', color: 0xE24B4A },
      { name: 'si', color: 0x7F77DD },
      { name: 'man', color: 0xD4537E },
      { name: 'nghi', color: 0x5DCAA5 }
    ];

    var rungEvery = 4;
    var rungIndices = [];
    for (var ri = 0; ri <= totalPoints; ri += rungEvery) rungIndices.push(ri);
    var rungCount = rungIndices.length;

    var rungType = [], rungSpeed = [], rungPhase = [], rungAmp = [];
    for (var r = 0; r < rungCount; r++) {
      rungType.push(r % 5);
      rungSpeed.push(0.5 + Math.random() * 0.6);
      rungPhase.push(Math.random() * Math.PI * 2);
      rungAmp.push(0.6 + Math.random() * 0.4);
    }

    var SEGMENTS = 12;
    var rungLines = [];
    for (var rl = 0; rl < rungCount; rl++) {
      var geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array((SEGMENTS + 1) * 3), 3));
      var mat = new THREE.LineBasicMaterial({ color: MAVUONG_TYPES[rungType[rl]].color, transparent: true, opacity: 0.6 });
      var line = new THREE.Line(geo, mat);
      rotor.add(line);
      rungLines.push(line);

      var nodeGeo = new THREE.SphereGeometry(0.045, 10, 10);
      var nodeMat = new THREE.MeshBasicMaterial({ color: MAVUONG_TYPES[rungType[rl]].color });
      var node = new THREE.Mesh(nodeGeo, nodeMat);
      rotor.add(node);
      line.midNode = node;
    }

    var camAngleX = 0.12, camAngleY = 0, camDist = 11;
    var dragging = false, lastX = 0, lastY = 0;
    renderer.domElement.style.cursor = 'grab';

    var raycaster = new THREE.Raycaster();
    var mouseNDC = new THREE.Vector2();
    var moved = false;

    renderer.domElement.addEventListener('pointerdown', function(e) {
      dragging = true; lastX = e.clientX; lastY = e.clientY; moved = false;
      renderer.domElement.style.cursor = 'grabbing';
    });
    window.addEventListener('pointerup', function(e) {
      dragging = false;
      renderer.domElement.style.cursor = 'grab';
      if (!moved) handleClick(e);
    });
    window.addEventListener('pointermove', function(e) {
      if (!dragging) return;
      var dx = e.clientX - lastX, dy = e.clientY - lastY;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) moved = true;
      lastX = e.clientX; lastY = e.clientY;
      camAngleY += dx * 0.005;
      camAngleX += dy * 0.005;
      camAngleX = Math.max(-1.5, Math.min(1.5, camAngleX));
    });
    renderer.domElement.addEventListener('wheel', function(e) {
      e.preventDefault();
      camDist += e.deltaY * 0.015;
      camDist = Math.max(3, Math.min(22, camDist));
    }, { passive: false });

    function handleClick(e) {
      var rect = renderer.domElement.getBoundingClientRect();
      mouseNDC.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseNDC.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouseNDC, camera);
      var intersects = raycaster.intersectObjects(pickable, false);
      if (intersects.length > 0) {
        var key = intersects[0].object.userData.entityKey;
        if (key && window.tkuOnEntityClick) window.tkuOnEntityClick(key);
        setActiveEntity(key);
      }
    }

    var activeKey = null;
    function setActiveEntity(key) {
      activeKey = key;
      pickable.forEach(function(obj) {
        if (!obj.material) return;
        var isActive = obj.userData.entityKey === key;
        if (obj.material.emissiveIntensity !== undefined) {
          obj.material.emissiveIntensity = isActive ? 0.7 : (obj.userData.baseEmissive || 0.15);
        }
      });
    }
    window.tkuSetActiveEntity = setActiveEntity;

    function updateCamera() {
      var x = camDist * Math.cos(camAngleX) * Math.sin(camAngleY);
      var z = camDist * Math.cos(camAngleX) * Math.cos(camAngleY);
      var y = camDist * Math.sin(camAngleX);
      camera.position.set(x, y, z);
      camera.lookAt(0, 0, 0);
    }

    window.tkuSetView = function(mode) {
      if (mode === 'top') { camAngleX = 1.45; camAngleY = 0.01; camDist = 14; }
      else if (mode === 'wide') { camAngleX = 0.18; camAngleY = 0.3; camDist = 18; }
      else { camAngleX = 0.08; camAngleY = 0; camDist = 10; }
    };

    window.addEventListener('resize', function() {
      var w2 = container.clientWidth, h2 = container.clientHeight;
      camera.aspect = w2 / h2;
      camera.updateProjectionMatrix();
      renderer.setSize(w2, h2);
    });

    var clock = new THREE.Clock();
    var elapsed = 0;

    function buildRungPath(r, val, p1, p2) {
      var type = rungType[r];
      var dir = p2.clone().sub(p1).normalize();
      var up = new THREE.Vector3(0, 1, 0);
      var perp = new THREE.Vector3().crossVectors(dir, up).normalize();
      if (perp.lengthSq() < 0.0001) perp.set(1, 0, 0);

      var pts = [];
      for (var s = 0; s <= SEGMENTS; s++) {
        var t = s / SEGMENTS;
        var base = p1.clone().lerp(p2, t);
        var centerWeight = 1 - Math.abs(t - 0.5) * 2;
        var off = new THREE.Vector3();

        if (type === 0) {
          off.add(perp.clone().multiplyScalar(centerWeight * val * 0.5));
        } else if (type === 1) {
          var jolt = Math.sin(elapsed * 14 + r) * centerWeight * val * 0.45;
          off.y += jolt;
        } else if (type === 2) {
          var n = (Math.sin(elapsed * 9 + r * 3 + s * 1.7)) * centerWeight * val * 0.3;
          off.add(perp.clone().multiplyScalar(n));
          off.y += Math.cos(elapsed * 7 + r * 2 + s * 1.3) * centerWeight * val * 0.15;
        } else if (type === 3) {
          var bulge = Math.pow(centerWeight, 1.6) * val * 0.55;
          off.y += bulge;
        } else {
          var jitter = Math.sin(elapsed * 20 + r + s * 2) * centerWeight * val * 0.22;
          off.add(perp.clone().multiplyScalar(jitter));
        }
        pts.push(base.clone().add(off));
      }
      return pts;
    }

    function animate() {
      requestAnimationFrame(animate);
      var dt = Math.min(clock.getDelta(), 0.05);
      elapsed += dt;
      rotor.rotation.y += dt * 0.18;

      for (var r = 0; r < rungCount; r++) {
        var i = rungIndices[r];
        var p1 = helixPoint(i, 0);
        var p2 = helixPoint(i, Math.PI);
        var raw = Math.sin(elapsed * rungSpeed[r] + rungPhase[r]) * 0.5 + 0.5;
        var val = raw * rungAmp[r];
        var pts = buildRungPath(r, val, p1, p2);
        var posAttr = rungLines[r].geometry.attributes.position;
        for (var s = 0; s < pts.length; s++) posAttr.setXYZ(s, pts[s].x, pts[s].y, pts[s].z);
        posAttr.needsUpdate = true;
        rungLines[r].material.opacity = 0.3 + val * 0.55;
        rungLines[r].midNode.position.copy(pts[Math.floor(SEGMENTS / 2)]);
        rungLines[r].midNode.scale.setScalar(0.6 + val * 0.8);
      }

      var pulse = 0.9 + Math.sin(elapsed * 1.5) * 0.1;
      nhanMesh.scale.setScalar(pulse);
      quaMesh.scale.setScalar(pulse);

      updateCamera();
      renderer.render(scene, camera);
    }
    animate();
  }
  init();
})();
