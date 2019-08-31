import {ctx} from '../io/canvas.js'

export default class Krug {
  /*
  * param polozaj: Vektor object
  */
  constructor(r, polozaj) {
    this.oblik = 'krug'
    this.r = r
    this.centar = polozaj
    this.dubina = 10
  }

  get povrsina() {
    return Math.PI * this.r * this.r
  }

  get zapremina() {
    return this.povrsina * this.dubina
  }

  render(x = this.centar.x, y = this.centar.y, r = this.r) {
    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2 * Math.PI)
    ctx.fill()
  }
}
