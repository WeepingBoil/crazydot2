function Display () {
    basic.clearScreen()
    for (let i = 0; i <= 3; i++) {
        led.plotBrightness(x[i], y[i], 255 / (i + 1))
    }
}
function SetPoint () {
    tx = randint(0, 4)
    ty = randint(0, 4)
    for (let j = 0; j <= 3; j++) {
        if (x[j] == tx && y[j] == ty) {
            SetPoint()
            break;
        }
    }
}
function Move () {
    dx = 0
    dy = 0
    if (x[0] == tx && y[0] == ty) {
        SetPoint()
        return
    }  if (x[0] < tx) {
        dx = 1
    }  if (x[0] > tx) {
        dx = -1
    }  if (y[0] < ty) {
        dy = 1
    }  if (y[0] > ty) {
        dy = -1
    }
    x.unshift(x[0] + dx)
    y.unshift(y[0] + dy)
    x.pop()
    y.pop()
    basic.pause(100)
}
let dy = 0
let dx = 0
let ty = 0
let tx = 0
let y: number[] = []
let x: number[] = []
let good = false
x = [
2,
2,
2,
2
]
y = [
2,
2,
2,
2
]
SetPoint()
basic.forever(function () {
    Display()
    Move()
})
