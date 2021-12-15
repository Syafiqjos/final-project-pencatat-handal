function updateExternalAssets(timePassed) {
  updateSkyboxRender();
  updateAirplaneRender(timePassed);
  updateBoxCoverRender(timePassed);
  updateBoxRoofRender(timePassed);
  updateEnvironmentDecorationsRender(timePassed);
  updateGroundDecorationsRender(timePassed);
  updateSkyDecorationsRender(timePassed);
}