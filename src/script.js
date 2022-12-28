import "./style.css";
import * as THREE from "three";

const canvas = document.querySelector(".webgl");

// Scene
const scene = new THREE.Scene();

// Red Cube
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: 0xff0000,
});
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cubeMesh);

const sizes = {
  width: 800,
  height: 600,
};

// Camera
// const camera = new THREE.PerspectiveCamera(
//   75,
//   sizes.width / sizes.height,
//   0.1, // near
//   100 // far
// );
const aspectRatio = sizes.width / sizes.height;
const camera = new THREE.OrthographicCamera(
  -1 * aspectRatio, // left
  1 * aspectRatio, // right
  -1, // top
  1, // bottom
  0.1, // near
  100 // far
);
camera.position.z = 3;
camera.lookAt(cubeMesh.position);
scene.add(camera);

// WebGL Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
