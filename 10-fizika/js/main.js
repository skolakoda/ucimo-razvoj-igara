import Vektor from '../../core/Vektor'
import Crtac from '../../core/Crtac'

class Krug {
  constructor(r, x, y) {
    this.oblik = 'krug'
    this.r = r
    this.polozaj = new Vektor(x, y)
  }
}

const krug = new Krug(50, 400, 100)

const crtac = new Crtac()
crtac.crtaj(krug)
