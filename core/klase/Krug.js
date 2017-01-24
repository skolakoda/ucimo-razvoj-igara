import Vektor from './Vektor'
import canvas from '../io/canvas'
const ctx = canvas.ctx

export default class Krug {
  constructor(r, x, y) {
    this.oblik = 'krug'
    this.r = r
    this.centar = new Vektor(x, y)
  }

  render(x = this.centar.x, y = this.centar.y, r = this.r) {
    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
  }
}
