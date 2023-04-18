class Calculator {
    constructor(previousOperandTextElem, currentOperandTextElem) {
        this.previousOperandTextElem = previousOperandTextElem;
        this.currentOperandTextElem = currentOperandTextElem;
        this.clear();
    }

    clear(){
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    }

    delete() {

    }

    appendNumber(number) {
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        this.operation = operation;

    }

    compute() {

    }

    updateDisplay() {
        this.currentOperandTextElem.innerHTML = this.currentOperand;
    }
}