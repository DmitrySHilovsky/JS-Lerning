import calculator from "./calculator";
import { TypeOperation } from "./type";

const checkResult = (firstNumber: number, secondNumber: number, operation: TypeOperation, expectedResult: number):void => {
    const result: number = calculator(firstNumber, secondNumber, operation);
    
    if (result === expectedResult) {
        console.log(firstNumber + operation + secondNumber + "=" + result + "  " + "=" + expectedResult + " passed");
    }
    else {
        console.log(firstNumber + operation + secondNumber + "=" + result + "  " + "=" + expectedResult + " failed");
    }
}

export default checkResult;