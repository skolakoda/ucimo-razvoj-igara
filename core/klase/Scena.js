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

  // pretvoriti gravitaciju u vektor
  // dodati jos neku silu (vetar)
  // izracunati rezultantu

  tezina(predmet) {
    if (predmet.polozaj.y + gravitacija >= visinaTla - predmet.visina) {
      predmet.polozaj.y = visinaTla - predmet.visina
      return
    }
    predmet.polozaj.y += gravitacija
  }

  sile(predmet) {
    this.tezina(predmet)
  }

  update() {
    predmeti.map(predmet => {
      this.sile(predmet)
    })
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
