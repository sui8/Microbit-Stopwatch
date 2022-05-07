input.onButtonPressed(Button.A, function () {
    if (isTimerPowered == 0) {
        isTimerPowered = 1
    } else {
        isTimerPowered = 0
    }
    music.playTone(523, music.beat(BeatFraction.Sixteenth))
})
input.onButtonPressed(Button.AB, function () {
    isTimerPowered = 0
    timer = 0
    timerNow = 0
    basic.clearScreen()
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
})
input.onButtonPressed(Button.B, function () {
    music.playTone(784, music.beat(BeatFraction.Sixteenth))
    basic.showNumber(timer - timerNow)
    timerNow = timer
})
let isTimerPowered = 0
let timerNow = 0
let timer = 0
timer = 0
timerNow = 0
isTimerPowered = 0
basic.forever(function () {
    while (isTimerPowered == 1) {
        basic.pause(1000)
        timer += 1
        basic.showNumber(timer)
    }
})
