
const crtaKrug = (context, krug) => {
  context.strokeStyle = "black";
  context.fillStyle = "black";
  context.lineWidth = 1;
  context.beginPath();
  context.arc(krug.polozaj.x, krug.polozaj.y, krug.r, 0, 2 * Math.PI, false);
  context.stroke();
  context.fill();
}


export default class Crtac {
  constructor(canvas) {
    this.platno = canvas || document.createElement('canvas')
    if (!canvas) document.body.appendChild(this.platno)
    this.platno.width = document.body.clientWidth
    this.platno.height = document.body.clientHeight
    this.platno.podloga = this.platno.getContext('2d')
  }

  crtaj(telo) {
    const podloga = this.platno.podloga;
    if (telo.oblik == 'krug') crtaKrug (podloga, telo)
    // proveriti da li je telo slika ili geometrija
    // crta krug
    // podloga.drawImage(telo.slika, -telo.sirina / 2, -telo.visina / 2, telo.sirina, telo.visina)

  }
}
