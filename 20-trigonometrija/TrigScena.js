import Predmet from 'klase/Predmet'
import Scena from 'klase/Scena'
import {canvas} from 'io/canvas'

const radijusKretanja = 150
const centar = {
  x: canvas.width / 2,
  y: canvas.height / 2
}

export default class TrigScena extends Scena {
  constructor() {
    super()
    this.lopta = new Predmet(50)
  }

  update() {
    const polozaj = this.lopta.polozaj
    const vreme = Date.now() / 1000
    polozaj.x = Math.cos(vreme) * radijusKretanja
    polozaj.y = Math.sin(vreme) * radijusKretanja
  }

  render() {
    const polozaj = this.lopta.polozaj
    this.lopta.oblik.render(centar.x + polozaj.x, centar.y + polozaj.y, this.lopta.oblik.r)
  }
}
