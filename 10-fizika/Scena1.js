// integrisati fiziku
// dodati interakciju

import Scena from 'klase/Scena'
import Predmet from 'klase/Predmet'

const krug1 = new Predmet(200, 50)
const krug2 = new Predmet(400, 200)
krug2.visina = 20
const krug3 = new Predmet(600, 100)

export default class Scena1 extends Scena {
  constructor() {
    super()
    this.add(krug1, krug2, krug3)
  }
}
