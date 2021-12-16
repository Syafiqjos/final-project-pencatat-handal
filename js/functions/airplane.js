function loadAirplane() {
  const loader = new THREE.GLTFLoader();

  loadMesh(scene, loader, 'assets/models/planes/plane01/scene.gltf', {
    position: [-60, 20, -80],
    scale: [0.01, 0.01, 0.01],
    rotation: [10 / 180 * Math.PI, 0, 0]
  }, externalMeshes, 'airplane01');

  loadMesh(scene, loader, 'assets/models/planes/plane02/Pesawat2.glb', {
    position: [0, 55, -20],
    materials: [
      new THREE.MeshLambertMaterial({ color: new THREE.Color(`rgb(255, 255, 255)`) })
    ]
  }, externalMeshes, 'airplane02');


}

function updateAirplaneRender(timePassed) {
  if (externalMeshes['airplane01'] != null) {
    let height = stack.length;

    if (height > 5) {
      externalMeshes['airplane01'].position.z += externalMeshesData.airplaneSpeed * timePassed * 4;
      externalMeshes['airplane01'].position.y += -externalMeshesData.airplaneSpeed * timePassed * 0.5;
    }
  }

  if (externalMeshes['airplane02'] != null) {
    let height = stack.length;

    if (height > 10) {
      externalMeshes['airplane02'].position.z += externalMeshesData.airplaneSpeed * timePassed;
    }
  }
}