import "./styles.css";
import gsap from "gsap";

import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls'
import * as dat from 'dat.gui'


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();

const materialColorPrimary = {r:0, g: 255,b: 50};
const materialColorSecondary = { r: 10, g: 200, b: 140 };


const material = new THREE.MeshBasicMaterial({ color: materialColorPrimary });
// material.needsUpdate = true;

const donutGeometry = new THREE.TorusGeometry(1.5, 0.5, 30, 30);
const donutMaterial = new THREE.MeshPhongMaterial({ color: materialColorPrimary, wireframe: false });

const light = new THREE.DirectionalLight(0xFFFFFF);
const lightHelper = new THREE.DirectionalLightHelper(light, 5);

scene.add(light)
scene.add(lightHelper)

const donut = new THREE.Mesh(donutGeometry, donutMaterial);
const donut2 = new THREE.Mesh(donutGeometry, donutMaterial);
const donut3 = new THREE.Mesh(donutGeometry, donutMaterial);

gsap.fromTo(donut.material.color, {...materialColorPrimary}, {...materialColorSecondary, duration: 10})

donut.matrixAutoUpdate = false;
donut.updateMatrix();

// scene.add(cube);
scene.add(donut);
// scene.add(donut2);
// scene.add(donut3);


donut2.position.x = 0;
donut3.position.x = 0;

camera.position.z = 5;

const gui = new dat.GUI();
gui.useLocalStorage = true
gui.add(donut.position, "x", -10, 10);

light.intensity = 0.3;

const lightFolder = gui.addFolder("Light");

gui.remember(light.position)
gui.remember(light)

lightFolder.add(light.position, "x", -10, 10);
lightFolder.add(light.position, "y", -10, 10);
lightFolder.add(light.position, "z", -10, 10);
lightFolder.add(light, "intensity", 0, 100);

const donuts = [donut, donut2, donut3];

// donuts.forEach((item, index) => {
//   gsap.to(item.position, {
//     x: 3,
//     duration: index + 1,
//   });
// });



const controls = new OrbitControls(camera, renderer.domElement)

const stats = Stats()
document.body.appendChild(stats.dom)

const controlsTransform = new TransformControls(camera, renderer.domElement)
controlsTransform.attach(donut)
scene.add(controlsTransform)

const animate = () => {
  requestAnimationFrame(animate);

  // donut.rotation.x += 0.01;
  // donut.rotation.y += 0.01;
  controls.update()
  stats.update()
  controlsTransform.update()
  renderer.render(scene, camera);
};

animate();
