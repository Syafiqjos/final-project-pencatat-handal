function loadEnvironmentDecorations() {
      const loader = new THREE.GLTFLoader();

    // FRONT MOUNTAINS
    loadMesh(scene, loader, 'assets/models/mountains/low_poly_mountain_scene/scene.gltf', {
        position: [-45, 0.1, -45],
        scale: [3, 3, -3],
        rotation: [0, 0, 0]
    }, externalMeshes, 'mountainsf00')

    loadMesh(scene, loader, 'assets/models/mountains/low_poly_mountain_scene/scene.gltf', {
        position: [-45, 0.1, -15],
        scale: [3, 3, 3],
        rotation: [0, 0, 0]
    }, externalMeshes, 'mountainsf01')

    loadMesh(scene, loader, 'assets/models/mountains/low_poly_mountain_scene/scene.gltf', {
        position: [-45, 0.1, 15],
        scale: [3, 3, -3],
        rotation: [0, 0, 0]
    }, externalMeshes, 'mountainsf02')

    loadMesh(scene, loader, 'assets/models/mountains/low_poly_mountain_scene/scene.gltf', {
        position: [-45, 0.1, 45],
        scale: [3, 3, 3],
        rotation: [0, 0, 0]
    }, externalMeshes, 'mountainsf02')

    // BIG ONE MOUNTAIN
    loadMesh(scene, loader, 'assets/models/mountains/mountain_landscape/scene.gltf', {
        position: [-100, -0.5, -40],
        scale: [0.2, 0.2, 0.2],
        rotation: [0, 90 / 180 * Math.PI, 0]
    }, externalMeshes, 'mountainsbig0')

    loadMesh(scene, loader, 'assets/models/mountains/mountain_landscape/scene.gltf', {
        position: [-100, -0.5, 39],
        scale: [0.2, 0.2, 0.2],
        rotation: [0, 90 / 180 * Math.PI, 0]
    }, externalMeshes, 'mountainsbig1')

    // SIDE MOUNTAINS
    loadMesh(scene, loader, 'assets/models/mountains/mountain_landscape/scene.gltf', {
        position: [0, -0.5, -50 + -1.5],
        scale: [0.1, 0.1, 0.1],
        rotation: [0, 0, 0]
    }, externalMeshes, 'mountains03')
    
    loadMesh(scene, loader, 'assets/models/mountains/mountain_landscape/scene.gltf', {
        position: [-40, -0.5, -50 + -1.5],
        scale: [0.1, 0.1, 0.1],
        rotation: [0, 0, 0]
    }, externalMeshes, 'mountains04')
}

function updateEnvironmentDecorationsRender(timePassed) {

}