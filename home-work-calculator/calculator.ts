import { TypeOperation } from "./type";

const calculator = (firstNumber: number, secondNumber: number, operation: TypeOperation): number => {
    switch (operation) {
        case '+': return firstNumber + secondNumber;
        case '-': return firstNumber - secondNumber;
        case "/": return firstNumber / secondNumber;
        case "*": return firstNumber * secondNumber;
    }
}

export default calculator;