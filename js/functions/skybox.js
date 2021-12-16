function createSkybox() {
  skybox = loadSky();
  scene.background = skybox;
}

function updateSkyboxRender(timePassed) {
  // skybox.position.set(
  //   lerp(skybox.position.x, cameraLookAtCurrent[0], lerpRatio),
  //   lerp(skybox.position.y, cameraLookAtCurrent[1], lerpRatio),
  //   lerp(skybox.position.z, cameraLookAtCurrent[2], lerpRatio)
  // );

  if (externalMeshes.sky !== undefined) {
    if (stack.length > 35) {
      externalMeshes.sky.material.opacity += 0.005;
      externalMeshes.sky.position.y = (stack[stack.length - 1].threejs.position.y + 120) || 390;
    } else {
      externalMeshes.sky.position.y = -1000;
    }
  }
}