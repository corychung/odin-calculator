let one = null;
let two = null; 
let operator = "";
let operatorPressed = false;
let answerShown = false;
let currentNum = null;
let answer = null;
let prevNum;
let prevOp;

const calculator = document.querySelector(".calc-container");
const display = document.querySelector("#display");

// operation functions
function add(one, two) {return (one + two);}
function subtract(one, two) {return one - two;}
function multiply(one, two) {return one * two;}
function divide(one, two) {return one / two;}
function operate(one, two, operator) {
    switch (operator) {
        case "add":
            return add(one,two);
        case "subtract":
            return subtract(one,two);
        case "multiply":
            return multiply(one,two);
        case "divide":
            return divide(one,two);
    }
}

function updateDisplay() {
    display.textContent = (operatorPressed) ? two : one;
}

calculator.addEventListener("click", (event) => {

    // number
    if (event.target.classList.contains("number")){
        if (answerShown) {
            operator = null;
            one = answer;
            two = null;
        }
        let digit = event.target.textContent;
        if (!operatorPressed)  
            one = (one === null || answerShown === true) ? digit : parseFloat(String(one) + String(digit));
        else {
            two = (two === null || answerShown === true) ? digit : parseFloat(String(two) + String(digit));
        }
        answerShown = false;
        updateDisplay();
    }

    // operator
    if (event.target.classList.contains("operator")) {
        if (answerShown) {
            operator = null;
            one = answer;
            two = null;
            answerShown = false;
        }
        operator = event.target.id;
        if (operatorPressed && answerShown) {
            let potentialAnswer = operate(one,two,operator);
            one = potentialAnswer;
            two = null;
        }
        operatorPressed = false;
        updateDisplay();
        operatorPressed = true;

    }

    // dot
    if (event.target.id === "dot") {
        let digit = +event.target.textContent;
        if (!operatorPressed) {
            one = (String(one) + ".");
        }
        else {
            two = (String(two) + ".");
        }
        updateDisplay();
    }

    // modifier
    if (event.target.classList.contains("above")) {
        switch (event.target.id) {
            case "sign-switch":
                (!operatorPressed || answerShown) ? one *= -1 : two *= -1;            
                updateDisplay();
                break;
            case "percent":
                (!operatorPressed || answerShown) ? one *= .01 : two *= .01;        
                updateDisplay();
                break;
        }
    }

    // equals
    if (event.target.id === "equals") {
        if (answerShown == true) {
            answer = operate(answer, prevNum, prevOp)
            display.textContent = answer;
            one = answer;
            two = null;
        }
        else {
            prevNum = two;
            prevOp = operator;
            answer = operate(one, two, operator)
            one = answer;
            two = null;
            display.textContent = answer;
            answerShown = true;
        }
        operatorPressed = false;
    }

    // clear all
    if (event.target.id === "all-clear") {
        display.textContent = "";
        one = null;
        two = null;
        answerShown = false;
        operatorPressed = false;
    }
        
    // testing
    console.log(`${one} ${two} ${operator} ${typeof one}`)
})

