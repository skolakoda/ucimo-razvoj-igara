// integrisati fiziku
// dodati interakciju

import Scena from 'klase/Scena'
import Krug from 'klase/Krug'

export default class Scena1 extends Scena {
  constructor() {
    super()
    this.add(
      new Krug(50, 200, 50),
      new Krug(30, 400, 200),
      new Krug(40, 600, 100)
    )
  }
}
