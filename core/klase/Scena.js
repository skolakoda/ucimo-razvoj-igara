import canvas from '../io/canvas'
import Vektor, {skaliraj} from './Vektor'
const ctx = canvas.ctx

const gravitacija = new Vektor(0, 98)
let then = Date.now()

export default class Scena {
  constructor() {
    this.predmeti = []
    this.tlo = canvas.height
    this.vetar = new Vektor(1, 0)
    this.vuca = 0.99  // vece je manje
    this.loopID = null
  }

  // PREDMETI

  add(...premeti) {
    this.predmeti.push(...premeti)
  }

  // GAME LOGIC

  update(dt) {
    this.predmeti.map(predmet => {
      if (!predmet.fizika) return
      this.integracija(predmet, dt)
      this.proveriTlo(predmet)
    })
  }

  integracija(predmet, dt) {
    predmet.sila.dodaj(this.vetar)
    predmet.sila.dodaj(gravitacija)
    predmet.sila.skaliraj(!this.sudaraTlo(predmet) ? this.vuca : predmet.trenje)

    predmet.ubrzanje = skaliraj(predmet.sila, 1 / predmet.masa)
    predmet.brzina.dodaj(skaliraj(predmet.ubrzanje, dt))
    predmet.polozaj.dodaj(skaliraj(predmet.brzina, dt))
  }

  proveriTlo(predmet) {
    if (!this.sudaraTlo(predmet)) return
    predmet.polozaj.y = this.tlo - predmet.polaVisine
    predmet.brzina.y *= -1
    predmet.brzina.y *= predmet.odskocivost
    if (predmet.brzina.y < 0.5) {
      // set velocity and gravity to 0 ?
    }
  }

  sudaraTlo(predmet) {
    return predmet.polozaj.y + predmet.polaVisine >= this.tlo
  }

  // LOOP

  loop() {
    this.loopID = window.requestAnimationFrame(this.loop.bind(this))
    const now = Date.now()
    const delta = now - then
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.update(delta)
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

  // RENDER

  render() {
    this.predmeti.map(predmet => predmet.render())
  }
}
