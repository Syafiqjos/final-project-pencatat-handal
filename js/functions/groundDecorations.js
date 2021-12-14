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

  loadMesh(scene, loader, 'assets/models/Rumah1.glb', {
    position: [0, 0, -20],
    scale: [1, 1, 1],
    rotation: [0, 0, 0],
    materials: [
      new THREE.MeshLambertMaterial({ color: new THREE.Color(`rgb(255, 255, 255)`), side: THREE.DoubleSide })
    ],
  }, externalMeshes, 'rumah001');

  loadMesh(scene, loader, 'assets/models/rumah2.glb', {
    position: [-18, 0, -5],
    scale: [1, 1.5, 1],
    rotation: [0, 1.5, 0],
    materials: [
      new THREE.MeshLambertMaterial({ color: new THREE.Color(`rgb(255, 255, 255)`) })
    ],
  }, externalMeshes, 'rumah002');

  loadMesh(scene, loader, 'assets/models/gedung2.glb', {
    position: [-8, 0, 20],
    scale: [1, 1, 1],
    rotation: [0, 0, 0],
    materials: [
      new THREE.MeshLambertMaterial({ color: new THREE.Color(`rgb(255, 255, 255)`) })
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

  loadMesh(scene, loader, 'assets/models/tugu.glb', {
    position: [20, 0, 0],
    scale: [2, 3, 2],
    rotation: [0, 0, 0],
    materials: [
      new THREE.MeshLambertMaterial({ color: new THREE.Color(`rgb(255, 255, 255)`), side: THREE.DoubleSide })
    ],
  }, externalMeshes, 'tugu');
}

function updateGroundDecorationsRender(timePassed) {
}