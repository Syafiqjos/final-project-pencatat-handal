function loadSky() {
	// const geometry = new THREE.BoxGeometry();
	
	// const texture = new THREE.TextureLoader().load( url );
	// const material = new THREE.MeshLambertMaterial( { map: texture } );

	// material.side = THREE.BackSide;

	// const sky = new THREE.Mesh( geometry, material );

	// let data = {
	// 	position: [0, 0, 0],
	// 	rotation: [0, 0, 0],
	// 	scale: [1, 1, 1]
	// }

	// data = {
	// 	...data,
	// 	...customData
	// };

	// // Data Modification
	// sky.position.set(...data.position);
	// sky.rotation.set(...data.rotation);
	// sky.scale.set(...data.scale);

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