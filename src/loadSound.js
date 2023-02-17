import Sound from "./sound"
import mp3 from "./mp3/son2.mp3"

export default class LoadSound {
  constructor() {
    this.sound = new Sound(mp3, 103, 0, () => this.startSound(), true)
    console.log("sound", this.sound)
    this.kick = 0
    this.kicks = this.sound.createKick({
      frequency: [0, 3],
      threshold: 30,
      decay: 20,
      onKick: (kick) => {
        this.kick = kick
      },
      offKick: null
    })
    this.kicks.on()
    this.initEvent()
  }

  startSound() {
    this.sound.play()
  }

  initEvent() {
    document.addEventListener("click", () => {
      this.sound.play()
    })
  }

}