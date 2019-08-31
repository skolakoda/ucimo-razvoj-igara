import {ctx, canvas} from '../io/canvas.js'
import Vektor, {skaliraj} from './Vektor.js'

const gravitacija = new Vektor(0, 98)
let then = Date.now()

export default class Scena {
  constructor() {
    this.predmeti = []
    this.tlo = canvas.height
    this.vetar = new Vektor(1, 0)
    this.vuca = 0.001
    this.loopID = null
  }

  add(...premeti) {
    this.predmeti.push(...premeti)
  }

  /* GAME LOGIC */

  integracija(predmet, dt) {
    predmet.sila.dodaj(this.vetar)
    predmet.sila.dodaj(gravitacija)
    predmet.sila.primeniOtpor(this.diraTlo(predmet) ? predmet.trenje : this.vuca)

    predmet.ubrzanje = skaliraj(predmet.sila, 1 / predmet.masa)
    predmet.brzina.dodaj(skaliraj(predmet.ubrzanje, dt))
    predmet.polozaj.dodaj(skaliraj(predmet.brzina, dt))
  }

  proveriTlo(predmet) {
    if (!this.diraTlo(predmet)) return
    this.sudarniOdgovor(predmet)
  }

  diraTlo(predmet) {
    return predmet.polozaj.y + predmet.polaVisine >= this.tlo
  }

  sudarniOdgovor(predmet) {
    predmet.polozaj.y = this.tlo - predmet.polaVisine
    predmet.brzina.y *= -1
    predmet.brzina.y *= predmet.odskocivost
  }

  /* PETLJA */

  update(dt) {
    this.predmeti.map(predmet => {
      if (!predmet.fizika) return
      this.integracija(predmet, dt)
      this.proveriTlo(predmet)
    })
  }

  loop() {
    this.loopID = window.requestAnimationFrame(this.loop.bind(this))
    const now = Date.now()
    const delta = now - then
    this.update(delta)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.render()
    then = now
  }

  start() {
    if (this.loopID) return
    this.loop()
  }

  stop() {
    if (!this.loopID) return
    window.cancelAnimationFrame(this.loopID)
    this.loopID = null
  }

  /* RENDER */

  render() {
    this.predmeti.map(predmet => predmet.render())
  }
}
