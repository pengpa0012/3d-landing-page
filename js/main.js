import "../css/style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Canvas

const canvas = document.querySelector("canvas.webgl");
const canvasContainer = document.querySelector(".canvas-container");
// Scene

const scene = new THREE.Scene();

// Cursor
/* 
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
}); */

// Objects
/* 
function addStar() {
  const star = new THREE.Mesh(
    new THREE.SphereGeometry(0.1, 24, 24),
    new THREE.MeshStandardMaterial({ color: 0xffffff })
  );

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar); */

// Box

const dirtTexture = new THREE.TextureLoader().load("./images/texture.jpg");
const box = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({
    map: dirtTexture,
  })
);
scene.add(box);

/**
 * Sizes
 */
const sizes = {
  width: canvasContainer.offsetWidth,
  height: canvasContainer.offsetHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = canvasContainer.offsetWidth;
  sizes.height = canvasContainer.offsetHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.set(0, 0, 2.5);
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update moon
  box.rotation.y = 0.2 * elapsedTime;
  box.rotation.x = 0.1 * elapsedTime;

  // Update Orbital Controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
