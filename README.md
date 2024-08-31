# The Odin Project: Calculator

This is my calculator project as part of The Odin Project's curriculum.

BUTTON OPTIONS:
- number
- operator
- clear
- modifier (above fxns)
- equals

STATE OPTIONS:
- default state (nothing)
- number state (operatorPressed ON or OFF)
- operator state (on or off)

FLOWCHART:
- default state (nothing) options:
    press number: show on screen, update ONE
    press anything else: nothing happens

- number state (shown) options:
    press number: add another digit, update ONE. if answerShown is on, clear everythign then reset() and turn answerShwon off.
    press modifier: modify current number (% or +/-)
    press operator: on operatorPressed, log operator
    press allclear: reset ONE, TWO, OPERATOR. update display
    press equals (operatorPressed on): operate, update display. answer becomes ONE, two becomes NULL. operatorPressed falls, clear operator.    answerShown is on

- operator state (on or off) options:
    press number: display resets and places number. operatorPressed on means move number to TWO/
    press operator: replace operator
    press modifier: operate on number.
    press equals (operatorPressed on): operate ONE with ONE, update display. answer becomes ONE, two becomes NULL.





