class Calculator(){
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement =previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }
}
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals');
const deleteButton = document.querySelector('[data-delete');
const allClearButton = document.querySelector('[data-all-Clear');
const previousOperandTextElement = document.querySelector('[data-previous-Operand');
const currentOperandTextElement = document.querySelector('[data-current-operand');

