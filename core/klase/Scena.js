import canvas from '../io/canvas'
const ctx = canvas.ctx

const visinaTla = canvas.height
const gravitacija = 9.8
const predmeti = []
let loopID = null

export default class Scena {

  // PREDMETI

  add(...noviPredmeti) {
    predmeti.push(...noviPredmeti)
  }

  get predmeti() {
    return predmeti
  }

  // GAME LOGIC

  update() {
    predmeti.map(predmet => {
      this.sile(predmet)
    })
  }

  silaTeze(predmet) {
    if (predmet.polozaj.y + gravitacija >= visinaTla - predmet.r) {
      predmet.polozaj.y = visinaTla - predmet.r
      return
    }
    predmet.polozaj.y += gravitacija
  }

  sile(predmet) {
    this.silaTeze(predmet)
  }

  // LOOP

  loop() {
    loopID = window.requestAnimationFrame(this.loop.bind(this))
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.update()
    this.render()
  }

  start() {
    if (!loopID) {
       this.loop()
    }
  }

  stop() {
    if (loopID) {
     window.cancelAnimationFrame(loopID)
     loopID = null
    }
  }

  // RENDER

  render() {
    predmeti.map(predmet => predmet.render())
  }
}
