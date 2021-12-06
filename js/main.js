let scene;
let camera;
let renderer;

const originalBoxSize = 3;

let stack = [];
let overhangs = [];
const colorOffset = 30 * (12 + 6);
const boxHeight = 1;

let gameStarted = false;

window.addEventListener('click', continueNextBox);

initialize();















































// Hoisting Functions

function continueNextBox() {
    if (!gameStarted) {
        renderer.setAnimationLoop(animation);
        gameStarted = true;
    } else {
        const topLayer = stack[stack.length - 1];
        const prevLayer = stack[stack.length - 2];

        const direction = topLayer.direction;

        const delta = topLayer.threejs.position[direction] - prevLayer.threejs.position[direction];

        const overhangSize = Math.abs(delta);

        const size = direction == 'x' ? topLayer.width : topLayer.depth;
        const overlap = size - overhangSize;

        if (overlap > 0) {
            const newWidth = direction == 'x' ? overlap : topLayer.width;
            const newDepth = direction == 'z' ? overlap : topLayer.depth;

            topLayer.width = newWidth;
            topLayer.depth = newDepth;

            topLayer.threejs.scale[direction] = overlap / size;
            topLayer.threejs.position[direction] -= delta / 2;

            const overhangShift = (overlap / 2 + overhangSize / 2) * Math.sign(delta);
            const overhangX = 
                direction == 'x'
                    ? topLayer.threejs.position.x + overhangShift
                    : topLayer.threejs.position.x;
            const overhangZ =
                direction == 'z'
                    ? topLayer.threejs.position.z + overhangShift
                    : topLayer.threejs.position.z;

            const overhangWidth = direction == 'x' ? overhangSize : newWidth;
            const overhangDepth = direction == 'z' ? overhangSize : newDepth;

            addOverhang(overhangX, overhangZ, overhangWidth, overhangDepth);

            const nextX = direction == 'x' ? 0 : -10;
            const nextZ = direction == 'z' ? 0: -10;

            const nextDirection = direction == 'x' ? 'z' : 'x';

            addLayer(nextX, nextZ, newWidth, newDepth, nextDirection);
        }
    }
}

function initialize() {
    scene = new THREE.Scene();

    addLayer(0, 0, originalBoxSize, originalBoxSize);
    addLayer(-10, 0, originalBoxSize, originalBoxSize, 'x');

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(10, 20, 0);
    scene.add(directionalLight);

    const width = 10;
    const height = width * (window.innerHeight / window.innerWidth);
    camera = new THREE.OrthographicCamera(
        width / -2,
        width / 2,
        height / 2,
        height / -2
    );
    camera.position.set(4, 4, 4);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({ antialias : true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
    document.body.appendChild(renderer.domElement);
}

function addLayer(x, z, width, depth, direction) {
    const y = boxHeight * stack.length;
    
    const layer = generateBox(x, y, z, width, depth);
    layer.direction = direction;

    stack.push(layer);
}

function addOverhang(x, z, width, depth) {
    const y = boxHeight * (stack.length - 1);
    const overhang = generateBox(x, y, z, width, depth);
    overhangs.push(overhang);
}

function generateBox(x, y, z, width, depth){
    const geometry = new THREE.BoxGeometry(width, boxHeight, depth);

    const color = new THREE.Color(`hsl(${30 + stack.length * 4 + colorOffset}, 100%, 50%)`);
    const material = new THREE.MeshLambertMaterial({ color });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    
    scene.add(mesh);

    return {
        threejs: mesh,
        width,
        depth,
        direction: null
    };
}

function animation() {
    const speed = 0.15;

    const topLayer = stack[stack.length - 1];
    topLayer.threejs.position[topLayer.direction] += speed;

    if (camera.position.y < boxHeight * (stack.length - 2) + 4) {
        camera.position.y += speed;
    }

    renderer.render(scene, camera);
}