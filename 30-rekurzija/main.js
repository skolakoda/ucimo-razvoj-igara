const canvas = document.getElementById('canvas')
canvas.height = window.innerHeight || canvas.height
canvas.width = document.body.clientWidth || canvas.width
const ctx = canvas.getContext('2d')

const drawCircle = (r) => {
  ctx.beginPath()
  ctx.arc(canvas.width/2, canvas.height/2, r, 0, 2 * Math.PI)
  ctx.stroke()
  if (r < 2) return
  drawCircle(r * 0.75)
}

drawCircle(1000)
