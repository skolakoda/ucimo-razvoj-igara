import Scena from 'klase/Scena'
import Krug from 'klase/Krug'
import Kvadrat from 'klase/Kvadrat'

const krug = new Krug(50, 400, 100)
const kvadrat = new Kvadrat(20, 20, 150, 100)

export default class Scena1 extends Scena {
  constructor() {
    super()
    this.add(krug, kvadrat)
  }

  update() {
    krug.centar.x++
  }
}
