export default class Vektor {
  constructor(x, y, z = 0) {
    this.x = x
    this.y = y
    this.z = z
  }

  stop() {
    this.x = 0
    this.y = 0
    this.z = 0
  }

  dodaj(vektor) {
    this.x += vektor.x
    this.y += vektor.y
    this.z += vektor.z
  }

  oduzmi() {

  }

  skaliraj(skalar) {
    this.x = this.x * skalar
    this.y = this.y * skalar
    this.z = this.z * skalar
  }

  primeniOtpor(procenat) {
    this.skaliraj(1 - procenat)
  }

  pomnoziSkalarno() {

  }

  pomnoziVektorski() {

  }

  rotiraj() {

  }
}

export function saberi(v1, v2) {
  return {
    x: v1.x + v2.x,
    y: v1.y + v2.y,
    z: v1.z + v2.z
  }
}

export function skaliraj(vektor, skalar) {
  return {
    x: vektor.x * skalar,
    y: vektor.y * skalar,
    z: vektor.z * skalar
  }
}
