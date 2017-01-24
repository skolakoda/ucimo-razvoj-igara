import canvas from '../io/canvas'
import Vektor from './Vektor'
import {saberi, skaliraj} from './Vektor'
const ctx = canvas.ctx

const gravitacija = new Vektor(0, 9.8)
let then = Date.now()
let loopID = null

export default class Scena {
  constructor() {
    this.predmeti = []
    this.tlo = canvas.height
    this.vetar = new Vektor(1, 0.5)
  }

  // PREDMETI

  add(...noviPredmeti) {
    this.predmeti.push(...noviPredmeti)
  }

  // GAME LOGIC

  // kad je na zemlji, trenje
  // napraviti projektil

  update(dt) {
    this.predmeti.map(predmet => {
      if (!predmet.fizika) return
      this.integracija(predmet, dt)
      this.proveriSudar(predmet)
    })
  }

  integracija(predmet, dt) {
    const rezultanta = new Vektor(0, 0, 0)
    rezultanta.dodaj(gravitacija)
    rezultanta.dodaj(this.vetar)
    predmet.ubrzanje = skaliraj(rezultanta, 1 / predmet.masa)
    predmet.brzina.dodaj(skaliraj(predmet.ubrzanje, dt))
    predmet.polozaj.dodaj(skaliraj(predmet.brzina, dt))
  }

  proveriSudar(predmet) {
    if (predmet.polozaj.y >= this.tlo - predmet.visina / 2) {
      predmet.polozaj.y = this.tlo - predmet.visina / 2
    }
  }

  // LOOP

  loop() {
    loopID = window.requestAnimationFrame(this.loop.bind(this))
    const now = Date.now();
    const delta = now - then;
    then = now;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.update(delta * 50)
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
    this.predmeti.map(predmet => predmet.render())
  }
}
