import canvas from '../io/canvas'
import Vektor from './Vektor'

const ctx = canvas.ctx
const gravitacija = new Vektor(0, 9.8)
const predmeti = []
let loopID = null

export default class Scena {
  constructor() {
    this.tlo = canvas.height
    this.snagaVetra = new Vektor(1, -0.5)
  }

  // PREDMETI

  add(...noviPredmeti) {
    predmeti.push(...noviPredmeti)
  }

  get predmeti() {
    return predmeti
  }

  // GAME LOGIC

  // sabirati vektore
  // kad je na zemlji, trenje
  // izracunati rezultantu
  // napraviti projektil

  update() {
    predmeti.map(predmet => {
      if (!predmet.fizika) return
      this.sile(predmet)
      this.proveriSudar(predmet)
    })
  }

  tezina(predmet) {
    predmet.polozaj.y += gravitacija.y
  }

  vetar(predmet) {
    predmet.polozaj.x += this.snagaVetra.x
  }

  sile(predmet) {
    this.tezina(predmet)
    this.vetar(predmet)
  }

  proveriSudar(predmet) {
    if (predmet.polozaj.y >= this.tlo - predmet.visina / 2) {
      predmet.polozaj.y = this.tlo - predmet.visina / 2
    }
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
