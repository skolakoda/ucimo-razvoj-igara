import Predmet from 'klase/Predmet'
import Scena from 'klase/Scena'
import {canvas} from 'io/canvas'

const radijusKretanja = 150
const centar = {
  x: canvas.width / 2,
  y: canvas.height / 2
}

const scena = new Scena()
const lopta = new Predmet(50)

scena.update = () => {
  const vreme = Date.now() / 1000
  lopta.polozaj.x = Math.cos(vreme) * radijusKretanja
  lopta.polozaj.y = Math.sin(vreme) * radijusKretanja
}

scena.render = () => {
  lopta.oblik.render(centar.x + lopta.polozaj.x, centar.y + lopta.polozaj.y, lopta.oblik.r)
}

scena.start()
