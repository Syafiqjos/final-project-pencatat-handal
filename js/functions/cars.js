function loadCars() {
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
}

function updateCarsRender(timePassed) {

}