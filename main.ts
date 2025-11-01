radio.onReceivedNumber(function (receivedNumber) {
    if (On == 1) {
        if (receivedNumber == 1) {
            for (let index = 0; index < 4; index++) {
                basic.showLeds(`
                    . # # # .
                    # . . . #
                    # . # . #
                    # . . . #
                    . # # # .
                    `)
                basic.showLeds(`
                    . . . . .
                    . # # # .
                    . # . # .
                    . # # # .
                    . . . . .
                    `)
            }
        }
        if (receivedNumber == 2) {
            for (let index = 0; index < 4; index++) {
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . # . .
                    . # . # .
                    . . . . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . . # . .
                    . # # # .
                    . . # . .
                    . . . . .
                    `)
            }
        }
        basic.showLeds(`
            . # # # .
            # # . . #
            # # # . #
            # # . . #
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    On = 1
    basic.showLeds(`
        . # # # .
        # # . . #
        # # # . #
        # # . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    On = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let On = 0
radio.setGroup(51)
On = 0
