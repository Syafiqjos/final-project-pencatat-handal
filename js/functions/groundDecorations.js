function loadGroundDecorations() {
  const loader = new THREE.GLTFLoader();

  // Ngeload mesh, bisa di copy
  loadMesh(scene, loader, 'assets/models/Gedung1.glb', {
    position: [-18, 0, 10],
    scale: [1, 1.5, 1],
    rotation: [0, 0, 0],
    materials: [
      new THREE.MeshLambertMaterial({ color: new THREE.Color(`rgb(255, 255, 255)`) })
    ],
  }, externalMeshes, 'gedung001');

  let buildingTexture = new THREE.TextureLoader().load('assets/images/TexturesCom_HighRiseGlass0022_5_M.jpg');
  buildingTexture.wrapS = THREE.RepeatWrapping;
  buildingTexture.wrapT = THREE.RepeatWrapping;
  buildingTexture.repeat.set(20, 20);

  loadMesh(scene, loader, 'assets/models/gedung2.glb', {
    position: [-8, 0, 23.5],
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
  }, externalMeshes, 'gedung002');

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

  loadMesh(scene, loader, 'assets/models/cartoon_plane/scene.gltf', {
    position: [0, 0, 5],
    scale: [0.01, 0.01, 0.01],
    rotation: [0, 0, 0]
  }, externalMeshes, 'pesawat')

  loadMesh(scene, loader, 'assets/models/classic_muscle_car/scene.gltf', {
    position: [4, 1, 0],
    scale: [0.25, 0.25, 0.25],
    rotation: [0, 0, 0]
  }, externalMeshes, 'mobil001')

  loadMesh(scene, loader, 'assets/models/low-poly_truck_car_drifter/scene.gltf', {
    position: [0, 1, -10],
    scale: [0.01, 0.01, 0.01],
    rotation: [0, 0, 0]
  }, externalMeshes, 'mobil002')

  loadMesh(scene, loader, 'assets/models/ambulance_car_-_low_poly/scene.gltf', {
    position: [-5, 1, 0],
    scale: [1, 1, 1],
    rotation: [0, 0, 0]
  }, externalMeshes, 'mobil003')

  loadMesh(scene, loader, 'assets/models/isometric_low-poly_shop_building/scene.gltf', {
    position: [-10, 0, 0],
    scale: [0.3, 0.3, 0.3],
    rotation: [0, 0, 0]
  }, externalMeshes, 'gedung003')

  loadMesh(scene, loader, 'assets/models/road_crossing/scene.gltf', {
    position: [0, 0, 0],
    scale: [1, 1, 1],
    rotation: [0, 0, 0]
  }, externalMeshes, 'aspal')

  loadMesh(scene, loader, 'assets/models/road_crossing/scene.gltf', {
    position: [0, 0, 22.5],
    scale: [1, 1, 1],
    rotation: [0, 0, 0]
  }, externalMeshes, 'aspal')

  loadMesh(scene, loader, 'assets/models/road_crossing/scene.gltf', {
    position: [22.5, 0, 0],
    scale: [1, 1, 1],
    rotation: [0, 0, 0]
  }, externalMeshes, 'aspal')

  loadMesh(scene, loader, 'assets/models/road_crossing/scene.gltf', {
    position: [-22.5, 0, 0],
    scale: [1, 1, 1],
    rotation: [0, 0, 0]
  }, externalMeshes, 'aspal')

  const geometry = new THREE.PlaneGeometry(10, 10);
  let boxTexture = new THREE.TextureLoader().load('assets/images/blue_floor_tiles_01_diff_1k.jpg');
  boxTexture.wrapS = THREE.RepeatWrapping;
  boxTexture.wrapT = THREE.RepeatWrapping;
  boxTexture.repeat.set(20, 20);
  const material = new THREE.MeshPhongMaterial({ map: boxTexture });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = -90 / 180 * Math.PI;
  mesh.scale.set(10, 10, 10);

  scene.add(mesh);

}

function updateGroundDecorationsRender(timePassed) {
}