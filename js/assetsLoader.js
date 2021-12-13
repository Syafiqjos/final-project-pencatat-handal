const loader = new THREE.GLTFLoader();

function loadMesh(scene, loader, url, customData) {

	let data = {
		position: [0, 0, 0],
		rotation: [0, 0, 0],
		scale: [1, 1, 1]
	}

	data = {
		...data,
		...customData
	};

	loader.load(
		url,
		function ( gltf ) {
			let scene2 = gltf.scene;

			console.log(scene2);

			// Data Modification
			scene2.position.set(...data.position);
			scene2.rotation.set(...data.rotation);
			scene2.scale.set(...data.scale);

			console.log(scene2);
			scene.add(scene2);
		},
		// called while loading is progressing
		function ( xhr ) {

			console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

		},
		// called when loading has errors
		function ( error ) {

			console.log( 'An error happened' );

		}
	);
}