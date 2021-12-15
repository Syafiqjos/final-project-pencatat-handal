function loadGroundDecorations() {
  const loader = new THREE.GLTFLoader();

  // BUILDINGS
  loadMesh(scene, loader, 'assets/models/buildings/build01/Gedung1.glb', {
    position: [-18, 0, 10],
    scale: [1, 1.5, 1],
    rotation: [0, 0, 0],
    materials: [
      new THREE.MeshLambertMaterial({ color: new THREE.Color(`rgb(255, 255, 255)`) })
    ],
  }, externalMeshes, 'gedung01');

  let buildingTexture = new THREE.TextureLoader().load('assets/images/TexturesCom_HighRiseGlass0022_5_M.jpg');
  buildingTexture.wrapS = THREE.RepeatWrapping;
  buildingTexture.wrapT = THREE.RepeatWrapping;
  buildingTexture.repeat.set(20, 20);

  loadMesh(scene, loader, 'assets/models/buildings/build02/Gedung2.glb', {
    position: [-7.5, 0, 23],
    scale: [1, 1, 1],
    rotation: [0, 0, 0],
    materials: [
      new THREE.MeshLambertMaterial({
        color: new THREE.Color(`rgb(255, 255, 255)`),
        map: buildingTexture,
        side: THREE.DoubleSide
      }),
      new THREE.MeshLambertMaterial({
        color: new THREE.Color(`rgb(255, 255, 255)`),
        map: buildingTexture,
        side: THREE.DoubleSide
      }),
      new THREE.MeshLambertMaterial({
        color: new THREE.Color(`rgb(255, 255, 255)`),
        map: buildingTexture,
        side: THREE.DoubleSide
      })
    ],
  }, externalMeshes, 'gedung02');

  // GEDUNG POLISI
  loadMesh(scene, loader, 'assets/models/buildings/build03/scene.gltf', {
    position: [-6, 0, 2],
    scale: [0.3, 0.3, 0.3],
    rotation: [0, 0, 0]
  }, externalMeshes, 'gedung03')

  loadMesh(scene, loader, 'assets/models/buildings/build03/scene.gltf', {
    position: [-13, 0, 2],
    scale: [0.3, 0.3, 0.3],
    rotation: [0, 0, 0]
  }, externalMeshes, 'gedung03')

  // GEDUNG APARTEMENT
  for (let i = 0;i < 3; i++) {
    for (let j = 0;j < 3; j++) {
      let offsetX = i * -5.5;
      let offsetZ = j * -5.5;

      loadMesh(scene, loader, 'assets/models/buildings/build04/Gedung4.gltf', {
        position: [-7 + offsetX, 2, -11 + offsetZ],
        scale: [2.2, 2.2, 2.2],
        rotation: [0, 0, 0]
      }, externalMeshes, 'gedung04')
    }
  }

  // GEDUNG PABRIK
  loadMesh(scene, loader, 'assets/models/buildings/build05/Gedung5.gltf', {
    position: [8, 0, -10],
    scale: [0.6, 0.6, 0.6],
    rotation: [0, 0, 0]
  }, externalMeshes, 'gedung05')

  loadMesh(scene, loader, 'assets/models/buildings/build05/Gedung5.gltf', {
    position: [11, 0, -26.5],
    scale: [0.6, 0.6, 0.6],
    rotation: [0, Math.PI, 0]
  }, externalMeshes, 'gedung05')

  loadMesh(scene, loader, 'assets/models/buildings/build05/Gedung5.gltf', {
    position: [11, 0, 18.5],
    scale: [0.6, 0.6, 0.6],
    rotation: [0, Math.PI, 0]
  }, externalMeshes, 'gedung05')


  // FLOOR
  loadMesh(scene, loader, 'assets/models/floors/road/scene.gltf', {
    position: [0, 0, 0],
    scale: [1, 1, 1],
    rotation: [0, 0, 0]
  }, externalMeshes, 'aspal')

  loadMesh(scene, loader, 'assets/models/floors/road/scene.gltf', {
    position: [0, 0, 22.5],
    scale: [1, 1, 1],
    rotation: [0, 0, 0]
  }, externalMeshes, 'aspal')

  loadMesh(scene, loader, 'assets/models/floors/road/scene.gltf', {
    position: [22.5, 0, 0],
    scale: [1, 1, 1],
    rotation: [0, 0, 0]
  }, externalMeshes, 'aspal')

  loadMesh(scene, loader, 'assets/models/floors/road/scene.gltf', {
    position: [-22.5, 0, 0],
    scale: [1, 1, 1],
    rotation: [0, 0, 0]
  }, externalMeshes, 'aspal')

  loadMesh(scene, loader, 'assets/models/floors/road/scene.gltf', {
    position: [0, 0, -22.5],
    scale: [1, 1, 1],
    rotation: [0, 0, 0]
  }, externalMeshes, 'aspal')

  loadMesh(scene, loader, 'assets/models/floors/road/scene.gltf', {
    position: [22.5, 0, -22.5],
    scale: [1, 1, 1],
    rotation: [0, 0, 0]
  }, externalMeshes, 'aspal')

  loadMesh(scene, loader, 'assets/models/floors/road/scene.gltf', {
    position: [-22.5, 0, 22.5],
    scale: [1, 1, 1],
    rotation: [0, 0, 0]
  }, externalMeshes, 'aspal')

  loadMesh(scene, loader, 'assets/models/floors/road/scene.gltf', {
    position: [-22.5, 0, -22.5],
    scale: [1, 1, 1],
    rotation: [0, 0, 0]
  }, externalMeshes, 'aspal')

  loadMesh(scene, loader, 'assets/models/floors/road/scene.gltf', {
    position: [22.5, 0, 22.5],
    scale: [1, 1, 1],
    rotation: [0, 0, 0]
  }, externalMeshes, 'aspal')

  // loadMesh(scene, loader, 'assets/models/RumahContainer.glb', {
  //   position: [0, 0, 0],
  //   scale: [1, 1, 1],
  //   rotation: [0, 0, 0],
  //   materials: [
  //     new THREE.MeshLambertMaterial({ color: new THREE.Color(`rgb(255, 255, 255)`), side: THREE.DoubleSide }),
  //   ],
  // }, externalMeshes, 'rumah003');

  // loadMesh(scene, loader, 'assets/models/tugu.glb', {
  //   position: [20, 0, 0],
  //   scale: [2, 3, 2],
  //   rotation: [0, 0, 0],
  //   materials: [
  //     new THREE.MeshLambertMaterial({ color: new THREE.Color(`rgb(255, 255, 255)`), side: THREE.DoubleSide })
  //   ],
  // }, externalMeshes, 'tugu');

  // Paving
  const geometry = new THREE.PlaneGeometry(10, 10);
  let boxTexture = new THREE.TextureLoader().load('assets/images/blue_floor_tiles_01_diff_1k.jpg');
  boxTexture.wrapS = THREE.RepeatWrapping;
  boxTexture.wrapT = THREE.RepeatWrapping;
  boxTexture.repeat.set(20, 20);
  const material = new THREE.MeshPhongMaterial({ map: boxTexture });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = -90 / 180 * Math.PI;
  mesh.scale.set(10, 10, 10);
  mesh.castShadow = true;
  mesh.receiveShadow = true;

  // tanah
  const geometry2 = new THREE.PlaneGeometry(10, 10);
  let boxTexture2 = new THREE.TextureLoader().load('assets/images/tanah.jpg');
  boxTexture2.wrapS = THREE.RepeatWrapping;
  boxTexture2.wrapT = THREE.RepeatWrapping;
  boxTexture2.repeat.set(20, 20);
  const material2 = new THREE.MeshPhongMaterial({ map: boxTexture2 });
  const mesh2 = new THREE.Mesh(geometry2, material2);
  mesh2.rotation.x = -90 / 180 * Math.PI;
  mesh2.scale.set(2, 2, 2);
  mesh2.position.set(0,0.001,0);
  mesh2.castShadow = true;
  mesh2.receiveShadow = true;

  scene.add(mesh);
  scene.add(mesh2);

}

function updateGroundDecorationsRender(timePassed) {
}