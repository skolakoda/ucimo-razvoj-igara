const canvas = document.getElementById('canvas')
canvas.height = window.innerHeight || canvas.height
canvas.width = document.body.clientWidth || canvas.width
const ctx = canvas.getContext('2d')
const modifier = 100

const circle = {
  x: 100,
  y: 100,
  r: 50
}

const drawCircle = circle => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.beginPath()
  ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI)
  ctx.fill()
}

const loop = () => {
  window.requestAnimationFrame(loop)
  const time = Date.now() / 1000
  circle.x = Math.cos(time) * modifier + canvas.width / 2
  circle.y = Math.sin(time) * modifier + canvas.height / 2
  drawCircle(circle)
}

loop()
