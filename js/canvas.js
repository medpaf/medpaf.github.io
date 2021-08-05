var canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const wave = {

    /* 
    y: canvas.height / 2,
    length: 0.005,
    amplitude: 300,
    frequency: 0.01  
    */

    y: canvas.height / 2,
    length: 0.005,
    amplitude: 250,
    frequency: 0.01
}

const strokeColor = {
    h: 337,
    s: 100,
    l: 50

}

const backgroundColor = {
    r: 0,
    g: 12,
    b: 34,
    a: 0.053
}

let increment = wave.frequency

function animate(){
    requestAnimationFrame(animate)
    c.fillStyle = `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, ${backgroundColor.a})`
    c.fillRect(0, 0, canvas.width, canvas.height)

    c.beginPath()
    c.moveTo(0, canvas.height / 2)

    for (let i = 0; i < canvas.width; i++){

        /* c.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.amplitude * Math.sin(increment)) */

        c.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.amplitude * Math.sin(increment))
    }

    c.strokeStyle = `hsl(${strokeColor.h}, ${strokeColor.s}%, ${strokeColor.l}%)`   /*'rgb(255, 0, 98)'*/
    c.stroke()
    increment += wave.frequency
}

animate()



