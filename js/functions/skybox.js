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
}