// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum = 0;
// for (let i in salaries) {
//     console.log(salaries[i]);
//     sum = sum + salaries[i];
// }
// console.log(sum);

const { textSpanOverlap } = require("typescript");

// // Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// const multiplyNumeric = (obj) => {
//     for (let key in obj) {
//         if (typeof (obj.key) == "number") {
//             obj.key = obj.key * 2;
//         }
//     }
//     return obj;
// }
// multiplyNumeric(menu);


// Использовоние this
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.


// let calculator = {
//     read(anum, bnum) {
//         this.a = anum;
//         this.b = bnum;

//     },
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     },
// };

// calculator.read(4, 20);
// console.log(calculator.sum());
// console.log(calculator.mul());

const car = {
    brand: "tesla",
    model: "model X",
    maxSpeed: 150,
    price: 20000,
    prod: true,
    bay(count) {
        console.log("Купили тачку " + this.brand + " - " + this.model + "в количестве: " + count + "к оплате: " + count * this.price);
    }
}
bayCar = (count) => {
    
}

car.bay(4);