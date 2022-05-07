def on_button_pressed_a():
    global isTimerPowered
    if isTimerPowered == 0:
        isTimerPowered = 1
    else:
        isTimerPowered = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global isTimerPowered, timer, timerNow
    isTimerPowered = 0
    timer = 0
    timerNow = 0
    basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global timerNow
    basic.show_number(timer - timerNow)
    timerNow = timer
input.on_button_pressed(Button.B, on_button_pressed_b)

isTimerPowered = 0
timerNow = 0
timer = 0
timer = 0
timerNow = 0
isTimerPowered = 0

def on_forever():
    global timer
    while isTimerPowered == 1:
        basic.pause(1000)
        timer += 1
        basic.show_number(timer)
basic.forever(on_forever)
