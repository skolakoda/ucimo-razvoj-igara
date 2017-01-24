// integrisati fiziku
// dodati interakciju

import Scena from 'klase/Scena'
import Predmet from 'klase/Predmet'

const krug1 = new Predmet(100)
const krug2 = new Predmet(80)
const krug3 = new Predmet(120)

export default class Scena1 extends Scena {
  constructor() {
    super()
    this.add(krug1, krug2, krug3)
  }
}
