const canvas = document.getElementById('canvas')
canvas.height = window.innerHeight || canvas.height
canvas.width = document.body.clientWidth || canvas.width
const ctx = canvas.getContext('2d')

const drawCircle = (x, y, r) => {
  ctx.beginPath()
  ctx.arc(x, y, r, 0, 2 * Math.PI)
  ctx.stroke()
  if (r < 2) return
  drawCircle(x + r/2, y, r/2)
  drawCircle(x - r/2, y, r/2)
}

drawCircle(canvas.width/2, canvas.height/2, 2000)
