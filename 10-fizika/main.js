/*
napraviti sudaranje lopti:
https://gamedevelopment.tutsplus.com/tutorials/when-worlds-collide-simulating-circle-circle-collisions--gamedev-769
dodati user input
*/
import Scena from '../core/klase/Scena.js'
import Predmet from '../core/klase/Predmet.js'

const krug1 = new Predmet(100)
const krug2 = new Predmet(80)
const krug3 = new Predmet(120)

const scena = new Scena()
scena.add(krug1, krug2, krug3)
scena.start()
