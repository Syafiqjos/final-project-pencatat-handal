function updateExternalAssets(timePassed) {
  updateSkyboxRender();
  updateAirplaneRender(timePassed);
  updateCarsRender(timePassed);
  updateBoxCoverRender(timePassed);
  updateBoxRoofRender(timePassed);
  updateEnvironmentDecorationsRender(timePassed);
  updateGroundDecorationsRender(timePassed);
  updateSkyDecorationsRender(timePassed);
}