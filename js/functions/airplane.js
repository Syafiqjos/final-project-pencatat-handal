function loadAirplane() {
  const loader = new THREE.GLTFLoader();

  loadMesh(scene, loader, 'assets/models/planes/plane01/scene.gltf', {
    position: [0, 60, 5],
    scale: [0.01, 0.01, 0.01],
    rotation: [0, 90, 0]
  }, externalMeshes, 'airplane01');

  loadMesh(scene, loader, 'assets/models/planes/plane02/Pesawat2.glb', {
    position: [0, 40, -20],
    materials: [
      new THREE.MeshLambertMaterial({ color: new THREE.Color(`rgb(255, 255, 255)`) })
    ]
  }, externalMeshes, 'airplane02');


}

function updateAirplaneRender(timePassed) {
  if (externalMeshes.airplane != null) {
    let height = stack.length;

    if (height > 10) {
      externalMeshes.airplane.position.z += externalMeshesData.airplaneSpeed * timePassed;
    }
  }
}