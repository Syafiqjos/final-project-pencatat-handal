function loadGroundDecorations() {
  const loader = new THREE.GLTFLoader();

  // CARS
  loadMesh(scene, loader, 'assets/models/cars/muscle-car/scene.gltf', {
    position: [1, 1, -20],
    scale: [0.25, 0.25, 0.25],
    rotation: [0, 0, 0]
  }, externalMeshes, 'muscle-car')

  loadMesh(scene, loader, 'assets/models/cars/truck/scene.gltf', {
    position: [5, 1, -6],
    scale: [0.005, 0.005, 0.005],
    rotation: [0, 0, 0]
  }, externalMeshes, 'truck')

  loadMesh(scene, loader, 'assets/models/cars/ambulance/scene.gltf', {
    position: [-0.7, 1, 10],
    scale: [0.5, 0.5, 0.5],
    rotation: [0, 0, 0]
  }, externalMeshes, 'ambulance')


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
  }, externalMeshes, 'gedung02');

  loadMesh(scene, loader, 'assets/models/buildings/build03/scene.gltf', {
    position: [-5, 0, 1],
    scale: [0.3, 0.3, 0.3],
    rotation: [0, 0, 0]
  }, externalMeshes, 'gedung03')

  loadMesh(scene, loader, 'assets/models/buildings/build04/Gedung4.gltf', {
    position: [-6, 0, -11.5],
    scale: [1.2, 1.2, 1.2],
    rotation: [0, 0, 0]
  }, externalMeshes, 'gedung04')


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