function loadCars() {
  const loader = new THREE.GLTFLoader();

  // CARS
  loadMesh(scene, loader, 'assets/models/cars/muscle-car/scene.gltf', {
    position: [1, 1, -25],
    scale: [0.25, 0.25, 0.25],
    rotation: [0, 0, 0]
  }, externalMeshes, 'muscle-car')

  loadMesh(scene, loader, 'assets/models/cars/truck/scene.gltf', {
    position: [-10, 1, -6],
    scale: [0.005, 0.005, 0.005],
    rotation: [0, 0, 0]
  }, externalMeshes, 'truck')

  loadMesh(scene, loader, 'assets/models/cars/ambulance/scene.gltf', {
    position: [-0.7, 1, 10],
    scale: [0.5, 0.5, 0.5],
    rotation: [0, 0, 0]
  }, externalMeshes, 'ambulance')

  loadMesh(scene, loader, 'assets/models/cars/police-car/police-car.gltf', {
    position: [-2, 1, 11],
    scale: [0.7, 0.7, 0.7],
    rotation: [0, 90/180 * Math.PI, 0]
  }, externalMeshes, 'police-car-static')

  loadMesh(scene, loader, 'assets/models/cars/police-car/police-car.gltf', {
    position: [-5, 1, 11],
    scale: [0.7, 0.7, 0.7],
    rotation: [0, 90/180 * Math.PI, 0]
  }, externalMeshes, 'police-car-static')

  loadMesh(scene, loader, 'assets/models/cars/police-car/police-car.gltf', {
    position: [26, 1, -20],
    scale: [0.7, 0.7, 0.7],
    rotation: [0, 90/180 * Math.PI, 0]
  }, externalMeshes, 'police-car')

  loadMesh(scene, loader, 'assets/models/cars/bus/bus.gltf', {
    position: [28, 1, -8],
    scale: [0.65, 0.65, 0.65],
    rotation: [0, 270/180 * Math.PI, 0]
  }, externalMeshes, 'bus')
}

function updateCarsRender(timePassed) {
  if (externalMeshes['muscle-car'] != null) {
    let height = stack.length;

    if (height <= 10) {
      externalMeshes['muscle-car'].position.z += externalMeshesData.carSpeed * timePassed * 4;
    }
  }

  if (externalMeshes['truck'] != null) {
    let height = stack.length;

    if (height <= 9) {
      externalMeshes['truck'].position.x += externalMeshesData.carSpeed * timePassed * 4;
    }
  }

  if (externalMeshes['ambulance'] != null) {
    let height = stack.length;
    
    if (height <= 9) {
      externalMeshes['ambulance'].position.z -= externalMeshesData.carSpeed * timePassed * 4;
    }
  }

  if (externalMeshes['police-car'] != null) {
    let height = stack.length;
    
    if (height <= 9) {
      externalMeshes['police-car'].position.z += externalMeshesData.carSpeed * timePassed * 4;
    }
  }

  if (externalMeshes['bus'] != null) {
    let height = stack.length;
    
    if (height <= 12) {
      externalMeshes['bus'].position.x -= externalMeshesData.carSpeed * timePassed * 4;
    }
  }

}