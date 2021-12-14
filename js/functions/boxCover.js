function createBoxCover() {
  let width = originalBoxSize;
  let depth = originalBoxSize;
  let height = 0.1;

  if (externalMeshes.boxCover != null) {
    width = stack[stack.length - 1].width;
    depth = stack[stack.length - 1].depth;
  }

  width *= 1.05;
  depth *= 1.05;

  let geometry = new THREE.BoxGeometry(width, height, depth);

  externalMeshes.boxCover = new THREE.Mesh(
    geometry,
    new THREE.MeshLambertMaterial({ 
      color: new THREE.Color(`hsl(${30 + stack.length * 4}, 100%, 70%)`) 
    })
  );
  scene.add(externalMeshes.boxCover);
}

function updateBoxCoverRender(timePassed) {
  if (externalMeshes.boxCover != null) {
    let lastPos = stack[stack.length - 2].threejs.position;
    let newPos =
     [
       lastPos.x, 
       lastPos.y + boxHeight / 2, 
       lastPos.z
    ];

    externalMeshes.boxCover.position.set(...newPos);
  }
}