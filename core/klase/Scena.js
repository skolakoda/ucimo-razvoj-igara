import canvas from '../io/canvas'
const ctx = canvas.ctx

export default class Scena {
  loop() {
    window.requestAnimationFrame(this.loop.bind(this))
    this.update()
  }
  start() {
    this.loop()
  }
}
