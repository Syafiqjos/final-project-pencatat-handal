function loadPlanet() {
  const loader = new THREE.GLTFLoader();

  loadMesh(scene, loader, 'assets/models/skyobjects/planet/scene.gltf', {
    position: [0, 75, 0],
    scale: [0.03, 0.03, 0.03],
    rotation: [0, 0, 0]
  }, externalMeshes, 'planet01');

}
