class Calculator {
    constructor(previousOperandTextElem, currentOperandTextElem) {
        this.previousOperandTextElem = previousOperandTextElem;
        this.currentOperandTextElem = currentOperandTextElem;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand =
            this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computationResult;
        const currentValue = parseFloat(this.currentOperand);
        const previousValue = parseFloat(this.previousOperand);

        if (isNaN(currentValue) || isNaN(previousValue)) return;

        switch (this.operation) {
            case '+':
                computationResult = previousValue + currentValue;
                break;
            case '-':
                computationResult = previousValue - currentValue;
                break;
            case '*':
                computationResult = previousValue * currentValue;
                break;
            case '÷':
                computationResult = previousValue / currentValue;
                break;
            default:
                return;
        }

        this.currentOperand = computationResult;
        this.operation = undefined;
        this.previousOperand = '';
    }

    getFormattedNumber(number) {
        let integerDisplay;
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];

        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en-US', {
                maximumFractionDigits: 0,
            });
        }

        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateView() {
        this.currentOperandTextElem.innerText = this.getFormattedNumber(
            this.currentOperand,
        );

        if (this.operation != null) {
            this.previousOperandTextElem.innerText = `${this.getFormattedNumber(
                this.previousOperand,
            )} ${this.operation}`;
        } else {
            this.previousOperandTextElem.innerText = '';
        }
    }
}
