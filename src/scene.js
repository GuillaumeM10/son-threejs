import App from "./app"
import * as THREE from "three";

export default class Scene {
  constructor() {
    this.app = new App()
    this.instance = new THREE.Scene();
  }
}