import Predmet from 'klase/Predmet'
import Scena from 'klase/Scena'
import {canvas, ctx} from 'io/canvas'

const radijusKretanja = 150
const centar = {
  x: canvas.width / 2,
  y: canvas.height / 2
}

export default class TrigScena extends Scena {
  constructor() {
    super()
    this.predmet = new Predmet(50)
  }

  update() {
    const polozaj = this.predmet.polozaj
    const vreme = Date.now() / 1000
    polozaj.x = Math.cos(vreme) * radijusKretanja
    polozaj.y = Math.sin(vreme) * radijusKretanja
  }

  render() {
    const polozaj = this.predmet.polozaj
    ctx.beginPath()
    ctx.arc(centar.x + polozaj.x, centar.y + polozaj.y, this.predmet.oblik.r, 0, 2 * Math.PI)
    ctx.fill()
  }
}
