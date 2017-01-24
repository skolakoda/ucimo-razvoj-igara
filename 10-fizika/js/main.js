import Scena from 'klase/Scena'
import Krug from 'klase/Krug'
import Kvadrat from 'klase/Kvadrat'

const krug = new Krug(50, 400, 100)
const kvadrat = new Kvadrat(20, 20, 150, 100)

class Nivo1 extends Scena {
  update() {
    krug.centar.x++
    krug.crtaj()
    kvadrat.crtaj()
  }
}

// odvojiti u main
const nivo1 = new Nivo1()
nivo1.start()
