import canvas from '../io/canvas'
const ctx = canvas.ctx

const predmeti = []

export default class Scena {

  // PREDMETI

  add(...noviPredmeti) {
    predmeti.push(...noviPredmeti);
  }

  get predmeti() {
    return predmeti;
  }

  // ANIMACIJA

  update() {
    // da iterira sve predmete i integrise fiziku
  }

  loop() {
    this.loopID = window.requestAnimationFrame(this.loop.bind(this))
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // popunjavaju naslednici
    this.update()
    this.render()
  }

  start() {
    if (!this.loopID) {
       this.loop()
    }
  }

  stop() {
    if (this.loopID) {
     window.cancelAnimationFrame(this.loopID);
     this.loopID = null;
    }
  }

  // RENDER

  render() {
    this.predmeti.map(predmet => predmet.render())
  }
}
