import App from './app'
import * as THREE from "three";

export default class Model {
  constructor() {
    this.app = new App()
    this.scene = this.app.scene.instance
    this.position = new THREE.Vector3((Math.random() * 10 - 5), (Math.random() * 10 - 5), 0)

    this.setGeometry()
    this.setMaterial()
    this.setMesh()
    this.setPosition()
  }

  setGeometry() {
    this.geometry = new THREE.TorusGeometry(1.5, 0.5, 30, 30);
  }

  setMaterial() {
    this.material = new THREE.MeshBasicMaterial({ color: {r:0, g: 255,b: 50} })
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh)
  }

  setPosition() {
    this.mesh.position.x = this.position.x
    this.mesh.position.y = this.position.y
    this.mesh.position.z = this.position.z
  }

  update() {
    this.mesh.rotation.x -= 0.0005 * this.app.LoadSound.kick
    this.mesh.scale.x = 0.01 * this.app.LoadSound.kick
  }
}