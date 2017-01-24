import Krug from './Krug'

export default class Predmet {
  constructor(x, y) {
    this.visina = 50
    this.oblik = new Krug(this.visina, x, y)
    this.polozaj = this.oblik.centar
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
    this.oblik.render(this.polozaj.x, this.polozaj.y, this.visina)
  }
}
