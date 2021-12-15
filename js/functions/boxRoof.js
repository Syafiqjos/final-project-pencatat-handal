function createBoxRoof() {
  let width = originalBoxSize;
  let depth = originalBoxSize;
  let height = 0.1;

  if (externalMeshes.boxRoof != null) {
    scene.remove( externalMeshes.boxRoof );

    width = stack[stack.length - 1].width;
    depth = stack[stack.length - 1].depth;
  }

  width *= 1.05;
  depth *= 1.05;

  let geometry = new THREE.BoxGeometry(width, height, depth);

  externalMeshes.boxRoof = new THREE.Mesh(
    geometry,
    new THREE.MeshLambertMaterial({ 
      color: new THREE.Color(`hsl(${30 + stack.length * 4}, 100%, 70%)`) 
    })
  );
  externalMeshes.boxRoof.userData.group = 'main';
  scene.add(externalMeshes.boxRoof);
}

function updateBoxRoofRender(timePassed) {
  if (externalMeshes.boxRoof != null) {
    let lastPos = stack[stack.length - 1].threejs.position;
    let newPos =
     [
       lastPos.x, 
       lastPos.y + boxHeight / 2, 
       lastPos.z
    ];
    
    if (!gameEnded) {
      externalMeshes.boxRoof.position.set(...newPos);
    } else {
      externalMeshes.boxRoof.position.set(0, 0, 0);
    }
  }
}