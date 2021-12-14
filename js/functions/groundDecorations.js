function loadGroundDecorations() {
  const loader = new THREE.GLTFLoader();

  // Ngeload mesh, bisa di copy
  loadMesh(scene, loader, 'assets/models/Gedung1.glb', {
    position: [-8, 0, 8],
    scale: [1, 1, 1],
    rotation: [0, 0, 0],
    materials: [
      new THREE.MeshLambertMaterial({ color: new THREE.Color(`rgb(255, 255, 255)`) })
    ],
  }, externalMeshes, 'gedung001');
}

function updateGroundDecorationsRender(timePassed) {

}