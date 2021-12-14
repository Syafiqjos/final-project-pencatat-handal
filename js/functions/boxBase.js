function createBoxBase() {
  externalMeshes.boxBase = new THREE.Mesh(
    new THREE.BoxGeometry,
    new THREE.MeshLambertMaterial({ 
      color: new THREE.Color(`hsl(${30 + stack.length * 4}, 100%, 70%)`) 
    })
  );
  externalMeshes.boxBase.scale.set(3.1, 1, 3.1);
  externalMeshes.boxBase.position.set(0, 0.2, 0);
  scene.add(externalMeshes.boxBase);
}