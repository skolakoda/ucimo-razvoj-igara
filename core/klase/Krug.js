import canvas from '../io/canvas'
const ctx = canvas.ctx

export default class Krug {
  /*
  * param polozaj: Vektor object
  */
  constructor(r, polozaj) {
    this.oblik = 'krug'
    this.r = r
    this.centar = polozaj
  }

  render(x = this.centar.x, y = this.centar.y, r = this.r) {
    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
  }
}
