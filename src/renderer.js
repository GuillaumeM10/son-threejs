import App from "./app"
import * as THREE from "three";

export default class Renderer {
  constructor() {
    this.app = new App()

    this.camera = this.app.camera.instance
    this.scene = this.app.scene.instance

    this.instance = new THREE.WebGLRenderer();
    this.instance.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.instance.domElement);
  }

  update() {
    this.instance.render(this.scene, this.camera);
  }
}
