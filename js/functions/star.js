function loadStar() {
    const loader = new THREE.GLTFLoader();
    const material = [
      new THREE.MeshLambertMaterial({ color: new THREE.Color(`rgb(255, 255, 255)`) }),
      new THREE.MeshLambertMaterial({ color: new THREE.Color(`rgb(255, 255, 255)`) }),
      new THREE.MeshLambertMaterial({ color: new THREE.Color(`rgb(255, 255, 255)`) })
    ]
  
    function addStar(posx, posy, posz) {
      loadMesh(scene, loader, 'assets/models/skyobjects/star/Bintang1.gltf', {
      position: [posx, posy, posz],
      materials: material,
      scale: [0.85, 0.85, 0.85],
      rotation: [0, 0, 1.5708],
    }, externalMeshes, 'star01');
    }
    
    addStar(0, 60, -20);
    addStar(20, 70, -20);
    addStar(10, 75, -10);
    addStar(-15, 73, -10);
    addStar(-10, 78, -15);
    addStar(-5, 63, -17);
    addStar(-5, 65, 0);
    addStar(-15, 70, 5);
    addStar(-5, 75, 20);
    addStar(0, 63, 10);
    addStar(10, 75, 15);
    addStar(5, 73, 13);
  
  }