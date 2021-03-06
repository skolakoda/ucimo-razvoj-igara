import canvas from '../io/canvas.js'
import Krug from './Krug.js'
import Vektor from './Vektor.js'

/*
* Predmet podrazumevano ima oblik Kruga
*/
export default class Predmet {
  constructor(visina = 100, x = Math.random() * canvas.width, y = Math.random() * 100) {
    this.visina = visina
    this.polaVisine = visina / 2
    this.polozaj = new Vektor(x, y)
    this.oblik = new Krug(this.visina / 2, this.polozaj)
    this.fizika = true
    this.gustina = 700
    this.zapremina = this.oblik.zapremina
    this.sila = new Vektor(0, 0, 0)
    this.ubrzanje = new Vektor(0, 0)
    this.brzina = new Vektor(0, 0)
    this.trenjeS = 0.74
    this.trenjeK = 0.57
    this.odskocivost = 0.7
  }

  get masa() {
    return this.gustina * this.zapremina
  }

  get trenje() {
    return this.brzina.x === 0 ? this.trenjeS : this.trenjeK
  }

  render() {
    this.oblik.render()
  }
}
