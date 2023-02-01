// import { TypeOperation } from "./type";

// const calculator: {
// firstNumber:number,
// secondNumber:number,
// operation:TypeOperation,
// calculation:function name(params:type) {
//     calculation
// },
// } = {
//     firstNumber:0,
//     secondNumber:0,
//     operation:'+',
//     calculation: 
// }

// const calculation = (firstNumber: number, secondNumber: number, operation: TypeOperation): number => {
//     switch (operation) {
//         case '+': return this.firstNumber + secondNumber;
//         case '-': return firstNumber - secondNumber;
//         case "/": return firstNumber / secondNumber;
//         case "*": return firstNumber * secondNumber;
//     }
// }

// export default calculator;

const companies = {
    google: {people:20,size:40},
    apple:{people:2,size: 59}
}

const firePeople = (company) => {
    company.people /= 2
    return company;
}

const 