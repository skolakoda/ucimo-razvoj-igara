const canvas = document.getElementById('canvas')
canvas.height = window.innerHeight || canvas.height
canvas.width = document.body.clientWidth || canvas.width
canvas.style.backgroundColor = 'black'

const ctx = canvas.getContext('2d')
ctx.strokeStyle='lightgray'
ctx.fillStyle='lightgray'
ctx.lineWidth = 3

class Arc {
  constructor(start, end, radius = 200, clockwise = true, increment = 0.01) {
    this.start = start
    this.end = end
    this.radius = radius
    this.clockwise = clockwise
    this.increment = increment
  }

  update() {
    const increment = this.clockwise ? this.increment : -this.increment
    this.start += increment
    this.end += increment
  }

  render() {
    ctx.beginPath()
    ctx.arc(0, 0, this.radius, this.start, this.end)
    ctx.stroke()
  }
}

const arcs = []
for (let i = 0; i < Math.PI * 2; i+= Math.PI / 4) {
  arcs.push(new Arc(0 + i, Math.PI / 8 + i))
  arcs.push(new Arc(0 + i, Math.PI / 8 + i, 250, false))
}

/** FUNCTIONS **/

const drawCircle = () => {
  ctx.beginPath()
  ctx.arc(0, 0, 150, 0, 2 * Math.PI)
  ctx.fill()
}

const render = () => {
  ctx.translate(canvas.width / 2, canvas.height / 2)
  drawCircle()

  arcs.map(a => a.render())

  ctx.setTransform(1, 0, 0, 1, 0, 0)  // vraca matricu
}

const loop = () => {
  window.requestAnimationFrame(loop)
  arcs.map(a => a.update())
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  render()
}

loop()
