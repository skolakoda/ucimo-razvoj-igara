const canvas = document.createElement('canvas')

canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
canvas.style.backgroundColor = 'lightgray'
canvas.ctx = canvas.getContext('2d')
canvas.id = 'game-canvas'
document.body.appendChild(canvas)

export default canvas
