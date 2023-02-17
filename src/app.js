import "./styles.css";
import gsap from "gsap";

import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls'
import * as dat from 'dat.gui'

import Scene from "./scene"
import Renderer from "./renderer";
import Camera from "./camera";
import Model from "./model";
import LoadSound from "./loadSound";

let instance = null

export default class App {
  constructor() {
    //Singleton /IFFE
    if (instance) {
      return instance
    } 
    instance = this

    this.scene = new Scene()
    this.camera = new Camera()

    this.model = new Model()

    this.LoadSound = new LoadSound()

    this.renderer = new Renderer()

    this.update()
  }

  update() {
    this.renderer.update()
    this.model.update()

    requestAnimationFrame(() => this.update())
  }
}

const app = new App()


