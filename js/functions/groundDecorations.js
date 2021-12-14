function loadGroundDecorations() {
  const loader = new THREE.GLTFLoader();
  loadMesh(scene, loader, 'assets/models/Gedung1.glb', {
    position: [-8, 0, 8],
    materials: [
      new THREE.MeshLambertMaterial({ color: new THREE.Color(`rgb(255, 255, 255)`) })
    ],
  }, externalMeshes, 'gedung001');
}