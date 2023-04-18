const operatorBtns = document.querySelectorAll('[data-operator]');
const numberBtns = document.querySelectorAll('[data-number]');
const allClearBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const equalBtn = document.querySelector('[data-equal]');
const previousOperandTextElem = document.querySelector('[data-previous-operand]');
const currentOperandTextElem = document.querySelector('[data-current-operand]');


const calculator = new Calculator(previousOperandTextElem, currentOperandTextElem);
// console.log(calculator);


numberBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.appendNumber(btn.innerText);
        calculator.updateDisplay();
    })
})