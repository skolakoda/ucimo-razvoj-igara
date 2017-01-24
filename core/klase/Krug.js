import Vektor from './Vektor'
import canvas from '../io/canvas'
const ctx = canvas.ctx

export default class Krug {
  constructor(r, x, y) {
    this.oblik = 'krug'
    this.r = r
    this.centar = new Vektor(x, y)
  }
  crtaj() {
    ctx.beginPath()
    ctx.arc(this.centar.x, this.centar.y, this.r, 0, 2 * Math.PI);
    ctx.fill();
  }
}
