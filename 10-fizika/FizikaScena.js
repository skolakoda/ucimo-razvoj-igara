/*
napraviti sudaranje lopti
https://gamedevelopment.tutsplus.com/tutorials/when-worlds-collide-simulating-circle-circle-collisions--gamedev-769
*/
import Scena from 'klase/Scena'
import Predmet from 'klase/Predmet'
import Vektor from 'klase/Vektor'

const krug1 = new Predmet(100)
const krug2 = new Predmet(80)
const krug3 = new Predmet(120)
krug1.ubrzanje = krug2.ubrzanje = krug3.ubrzanje = new Vektor(0, 10)

export default class Scena1 extends Scena {
  constructor() {
    super()
    this.add(krug1, krug2, krug3)
  }
}
