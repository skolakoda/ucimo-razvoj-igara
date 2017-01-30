const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
canvas.style.backgroundColor = 'lightgray'
canvas.id = 'game-canvas'
document.body.appendChild(canvas)

export {
  canvas,
  ctx
}
export default canvas
