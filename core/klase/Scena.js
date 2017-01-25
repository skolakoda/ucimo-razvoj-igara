import canvas from '../io/canvas'
import Vektor, {skaliraj} from './Vektor'
const ctx = canvas.ctx

const gravitacija = new Vektor(0, 9.8)
let then = Date.now()
let loopID = null

export default class Scena {
  constructor() {
    this.predmeti = []
    this.tlo = canvas.height
    this.vetar = new Vektor(0.1, 0)
    this.vuca = 0.99
  }

  // PREDMETI

  add(...noviPredmeti) {
    this.predmeti.push(...noviPredmeti)
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
    predmet.sila.skaliraj(!this.naTlu(predmet) ? this.vuca : predmet.trenje)

    predmet.ubrzanje = skaliraj(predmet.sila, 1 / predmet.masa)
    predmet.brzina.dodaj(skaliraj(predmet.ubrzanje, dt))
    predmet.polozaj.dodaj(skaliraj(predmet.brzina, dt))
  }

  proveriTlo(predmet) {
    if (!this.naTlu(predmet)) return
    predmet.polozaj.y = this.tlo - predmet.polaVisine
  }

  naTlu(predmet) {
    return predmet.polozaj.y + predmet.polaVisine >= this.tlo
  }

  // LOOP

  loop() {
    loopID = window.requestAnimationFrame(this.loop.bind(this))
    const now = Date.now()
    const delta = now - then
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.update(delta * 10)
    this.render()
    then = now
  }

  start() {
    if (loopID) return
    this.loop()
  }

  stop() {
    if (!loopID) return
    window.cancelAnimationFrame(loopID)
    loopID = null
  }

  // RENDER

  render() {
    this.predmeti.map(predmet => predmet.render())
  }
}
