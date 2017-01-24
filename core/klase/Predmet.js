import canvas from '../io/canvas'
import Krug from './Krug'
import Vektor from './Vektor'

export default class Predmet {
  constructor(visina = 100, x = Math.random() * canvas.width, y = Math.random() * 100) {
    this.visina = visina
    this.polozaj = new Vektor(x, y)
    this.oblik = new Krug(this.visina / 2, this.polozaj)
    this.fizika = true
    // this.masa;
    // this.sila;
    // this.brzina;
    // this.telo = {
    //   odskocivost,
    //   gustina,
    //   trenje,
    // }
  }

  render() {
    this.oblik.render()
  }
}
