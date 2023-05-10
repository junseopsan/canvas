const canvas = document.querySelector('canvas')

const ctx = canvas.getContext('2d');
const dpr = window.devicePixelRatio

const canvasWidth = 300
const canvasHeight = 300

canvas.style.width  = `${canvasWidth}px`
canvas.style.height  = `${canvasHeight}px`

canvas.width = canvasWidth + dpr
canvas.height = canvasHeight + dpr
ctx.scale(dpr, dpr)

ctx.fillRect(10, 10, 50, 50)

class Paticle {
    constructor(x, y, radius){
        this.x = x
        this.y = y
        this.radius = radius
    }

    draw(){
        ctx.beginPath()
        ctx.arc(100, 100, 50, 0, Math.PI / 180 * 180)
        ctx.fillStyle = 'red'
        ctx.fill()
        ctx.closePath()
    }
}

const x = 100
const y = 100
const radius = 100
const particle = new Paticle(x, y, radius)

particle.draw()