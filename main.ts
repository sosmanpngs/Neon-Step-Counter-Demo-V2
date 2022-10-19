input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
    control.waitMicros(3000)
    basic.showNumber(Distance_Travelled)
    basic.showLeds(`
        # # . . #
        . # # # .
        . . # # #
        # # . . #
        # # . . .
        `)
    music.playMelody("G B A C5 C C5 A B ", 140)
})
input.onButtonPressed(Button.AB, function () {
    steps = 0
    Distance_Travelled = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Music player DEMO.exe")
    music.playMelody("E D E F G A B C5 ", 120)
    basic.showString("Pay for 1 more track!")
    control.waitMicros(4016)
    basic.showString("Payment Accepted!")
    control.waitMicros(2226)
    basic.showString("Your soundtrack!")
    music.playMelody("B A G D G B A C5 ", 120)
    basic.showString("Thanks for listening!")
})
let steps = 0
let Distance_Travelled = 0
Distance_Travelled = 0
steps = 0
basic.showString("Hello!")
control.waitMicros(3000)
basic.showString("Welcome to Neon step counter DEMO!")
basic.forever(function () {
	
})
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 1500) {
        steps += 1
        Distance_Travelled = steps * 70 / 100
    }
})
