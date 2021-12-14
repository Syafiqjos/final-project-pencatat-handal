function createSkybox() {
  skybox = loadSky(scene, 'assets/images/bryan-goff-f7YQo-eYHdM-unsplash.jpg', {
    scale: [100, 100, 100]
  });
  scene.add(skybox);
}

function updateSkyboxRender(timePassed) {
  skybox.position.set(
    lerp(skybox.position.x, cameraLookAtCurrent[0], lerpRatio),
    lerp(skybox.position.y, cameraLookAtCurrent[1], lerpRatio),
    lerp(skybox.position.z, cameraLookAtCurrent[2], lerpRatio)
  );
}