function loadSpace(url, customData) {
	const geometry = new THREE.BoxGeometry();
	
	const texture = new THREE.TextureLoader().load( url );
	const material = new THREE.MeshBasicMaterial( { map: texture } );
	material.opacity = 0.0;
	material.transparent = true;

	material.side = THREE.BackSide;

	externalMeshes.sky = new THREE.Mesh( geometry, material );

	let data = {
		position: [0, 0, 0],
		rotation: [0, 0, 0],
		scale: [1, 1, 1]
	}

	data = {
		...data,
		...customData
	};

	// Data Modification
	externalMeshes.sky.position.set(...data.position);
	externalMeshes.sky.rotation.set(...data.rotation);
	externalMeshes.sky.scale.set(...data.scale);

	scene.add(externalMeshes.sky);
}

function loadSky() {
	loadSpace('./assets/images/bryan-goff-f7YQo-eYHdM-unsplash.jpg', {
		position: [0, 390, 0],
		rotation: [0, 45 / 180 * Math.PI, 0],
		scale: [1000, 800, 1000]
	});

	let loader = new THREE.CubeTextureLoader();
	let skybox = loader.load([
		'assets/images/skybox/px.png',
		'assets/images/skybox/nx.png',
		'assets/images/skybox/py.png',
		'assets/images/skybox/ny.png',
		'assets/images/skybox/pz.png',
		'assets/images/skybox/nz.png',
	])

	return skybox;
}