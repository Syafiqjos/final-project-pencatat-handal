function loadAirplane() {
  const loader = new THREE.GLTFLoader();
  loadMesh(scene, loader, 'assets/models/Pesawat2.glb', {
    position: [0, 40, -20],
    materials: [
      new THREE.MeshLambertMaterial({ color: new THREE.Color(`rgb(255, 255, 255)`) })
    ]
  }, externalMeshes, 'airplane');
}

function updateAirplaneRender(timePassed) {
  if (externalMeshes.airplane != null) {
    let height = stack.length;

    if (height > 10) {
      externalMeshes.airplane.position.z += externalMeshesData.airplaneSpeed * timePassed;
    }
  }
}