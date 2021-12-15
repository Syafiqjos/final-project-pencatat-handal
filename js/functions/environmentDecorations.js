function loadEnvironmentDecorations() {
    const loader = new THREE.GLTFLoader();

    // OCEAN
    (() => {
        const geometry2 = new THREE.PlaneGeometry(10, 10);
        let boxTexture2 = new THREE.TextureLoader().load('assets/images/4884864.jpg');
        boxTexture2.wrapS = THREE.RepeatWrapping;
        boxTexture2.wrapT = THREE.RepeatWrapping;
        boxTexture2.repeat.set(20, 20);
        const material2 = new THREE.MeshPhongMaterial({ map: boxTexture2 });
        const mesh2 = new THREE.Mesh(geometry2, material2);
        mesh2.scale.set(1000, 1000, 1000);
        mesh2.rotation.x = -90 / 180 * Math.PI;
        mesh2.position.set(0, -1, 0);
        scene.add(mesh2);
    })();

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

    // BACK MOUNTAINS
    loadMesh(scene, loader, 'assets/models/mountains/low_poly_mountain_scene/scene.gltf', {
        position: [45.5, 0.1, -45],
        scale: [3, 3, -3],
        rotation: [0, Math.PI, 0]
    }, externalMeshes, 'mountainsf00')

    loadMesh(scene, loader, 'assets/models/mountains/low_poly_mountain_scene/scene.gltf', {
        position: [45.5, 0.1, -15],
        scale: [3, 3, 3],
        rotation: [0, Math.PI, 0]
    }, externalMeshes, 'mountainsf01')

    loadMesh(scene, loader, 'assets/models/mountains/low_poly_mountain_scene/scene.gltf', {
        position: [45.5, 0.1, 15],
        scale: [3, 3, -3],
        rotation: [0, Math.PI, 0]
    }, externalMeshes, 'mountainsf02')

    loadMesh(scene, loader, 'assets/models/mountains/low_poly_mountain_scene/scene.gltf', {
        position: [45.5, 0.1, 45],
        scale: [3, 3, 3],
        rotation: [0, Math.PI, 0]
    }, externalMeshes, 'mountainsf02')

    // BIG ONE MOUNTAIN FRONT
    loadMesh(scene, loader, 'assets/models/mountains/mountain_landscape/scene.gltf', {
        position: [-100, -0.5, -40],
        scale: [0.2, 0.2, 0.2],
        rotation: [0, 90 / 180 * Math.PI, 0]
    }, externalMeshes, 'mountainsbigf0')

    loadMesh(scene, loader, 'assets/models/mountains/mountain_landscape/scene.gltf', {
        position: [-100, -0.5, 39],
        scale: [0.2, 0.2, 0.2],
        rotation: [0, 90 / 180 * Math.PI, 0]
    }, externalMeshes, 'mountainsbigf1')

    // BIG ONE MOUNTAIN BACK
    loadMesh(scene, loader, 'assets/models/mountains/mountain_landscape/scene.gltf', {
        position: [100, -0.5, -40],
        scale: [0.2, 0.2, 0.2],
        rotation: [0, 90 / 180 * Math.PI, 0]
    }, externalMeshes, 'mountainsbigb0')

    loadMesh(scene, loader, 'assets/models/mountains/mountain_landscape/scene.gltf', {
        position: [100, -0.5, 39],
        scale: [0.2, 0.2, 0.2],
        rotation: [0, 90 / 180 * Math.PI, 0]
    }, externalMeshes, 'mountainsbigb1')

    // SIDE MOUNTAINS
    loadMesh(scene, loader, 'assets/models/mountains/mountain_landscape/scene.gltf', {
        position: [5, -0.5, -50 + -1.5],
        scale: [0.1, 0.1, 0.1],
        rotation: [0, 0, 0]
    }, externalMeshes, 'mountains03')
    
    loadMesh(scene, loader, 'assets/models/mountains/mountain_landscape/scene.gltf', {
        position: [-35, -0.5, -50 + -1.5],
        scale: [0.1, 0.1, 0.1],
        rotation: [0, 0, 0]
    }, externalMeshes, 'mountains04')

    // SIDE BACK MOUNTAINS
    loadMesh(scene, loader, 'assets/models/mountains/mountain_landscape/scene.gltf', {
        position: [5, -0.5, 50 - 3.5],
        scale: [0.1, 0.1, 0.1],
        rotation: [0, 0, 0]
    }, externalMeshes, 'mountains03')
    
    loadMesh(scene, loader, 'assets/models/mountains/mountain_landscape/scene.gltf', {
        position: [-35, -0.5, 50 - 3.5],
        scale: [0.1, 0.1, 0.1],
        rotation: [0, 0, 0]
    }, externalMeshes, 'mountains04')
}

function updateEnvironmentDecorationsRender(timePassed) {

}