import Vektor from './Vektor'
import canvas from '../io/canvas'
const ctx = canvas.ctx

export default class Kvadrat {
  constructor(x1, y1, x2, y2) {
    this.oblik = 'kvadrat'
    this.goreLevo = new Vektor(x1, y1)
    this.doleDesno = new Vektor(x2, y2)
  }
  crtaj() {
    ctx.rect(this.goreLevo.x, this.goreLevo.y, this.doleDesno.x, this.doleDesno.y)
    ctx.fill()
  }
}
