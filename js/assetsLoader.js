const loader = new THREE.GLTFLoader();
const meshCacheModel = {};
let meshCacheQueue = [];
let meshCacheIndex = 0;

function loadMesh(scene, loader, url, customData, externalMeshes, externalMeshKey) {
	meshCacheQueue.push({
		scene, loader, url, customData, externalMeshes, externalMeshKey
	});
}

function loadMeshBatch() {
	if (meshCacheIndex < meshCacheQueue.length) {
		let cache = meshCacheQueue[meshCacheIndex++];
		loadMeshSync(
			cache.scene,
			cache.loader,
			cache.url,
			cache.customData,
			cache.externalMeshes,
			cache.externalMeshKey,
		);
	}
}

function loadMeshSync(scene, loader, url, customData, externalMeshes, externalMeshKey) {
	let data = {
		position: [0, 0, 0],
		rotation: [0, 0, 0],
		scale: [1, 1, 1],
		materials: []
	}

	data = {
		...data,
		...customData
	};

	function recusivelyEnableShadow(mesh) {
		if (mesh) {
			mesh.castShadow = true;
			mesh.receiveShadow = true;

			if (mesh.children !== undefined && mesh.children.length > 0) {
				mesh.children.forEach((el) => {
					recusivelyEnableShadow(el);
				});
			}
		}
	}

	function modifyAndSpawnObject(scene, scene2) {
		// Data Modification
		scene2.position.set(...data.position);
		scene2.rotation.set(...data.rotation);
		scene2.scale.set(...data.scale);
		if (data.materials) {
			for (let i = 0;i < data.materials.length; i++) {
				scene2.children[i].material = data.materials[i];
			}
		}

		// recusivelyEnableShadow(scene2);

		console.log(scene2);

		if (externalMeshes !== undefined) {
			externalMeshes[externalMeshKey] = scene2;
		}

		scene.add(scene2);

		// APPLY OFFSET
		scene2.position.x += TOWER_OFFSET_X;
		scene2.position.y += TOWER_OFFSET_Y;
		scene2.position.z += TOWER_OFFSET_Z;
	}

	if (meshCacheModel[url] !== undefined) {
		let scene2 = meshCacheModel[url].clone(true);

		modifyAndSpawnObject(scene, scene2);
		loadMeshBatch();
	} else {
		loader.load(
			url,
			function ( gltf ) {
				let scene2 = gltf.scene;
				scene2.castShadow = true;
				scene2.receiveShadow = true;

				console.log(url);

				meshCacheModel[url] = scene2;
				modifyAndSpawnObject(scene, scene2);
				loadMeshBatch();
			},
			function ( xhr ) {
				console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
			},
			function ( error ) {
				console.log( 'An error happened' );
			}
		);
	}
}