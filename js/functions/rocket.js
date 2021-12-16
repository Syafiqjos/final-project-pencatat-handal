function loadRocket() {
  const loader = new THREE.GLTFLoader();

  loadMesh(scene, loader, 'assets/models/skyobjects/rocket/scene.gltf', {
    position: [25, 70, 0],
    scale: [0.5, 0.5, 0.5],
    rotation: [0.6, 0.5, 0]
  }, externalMeshes, 'rocket01');

}
