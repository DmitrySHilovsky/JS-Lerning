// const test = (outputData, message = "") => {
//     console.log(outputData, ` >>>>> ${message} <<<<<`);    
// }
// let a = 10;
// a="sdfsdf";
// console.log(a); //hoisting - возможность поднимать определения переменных вверх листинга кода
// const g = (a,b) => a+b;  // вызов функции фигурные скобки ненужны, функция сама добавит ретурн
// g(10,5);
// const h = (a,b) => {    // вызов функции несколько строк
//     return a+b;
// }
// console.log(g(10,5)," Function G"); 
// console.log(h(7,10)," Function H");
// xxx = "строка";   // строка "", '', ``
// console.log(`${xxx} ewwef`);   // ${} - интерполяция
// const zzz = 10; // int - число, целые и дробные
// test(zzz, "показать ccc"); // вместо консоль лога
// test(typeof(0.2 * 0.2));
// const userData = {                    // обьект
//     id: 5,
//     name: "vano",
//     roles: ["admin", "regular"],
// }
// const massuha = [1,2,3,4,5];         // массив
// let named: string = "petr sdfsd dsfsdf";
// console.log(named[named.length - 1]);
// const text = 'When \t\n you play a \t\n game of thrones you win or you die.';
// console.log(text.trim().slice(5,15));
// const motto = (ass:string) => {
//     let mmmm:String;
//     mmmm = "10";
//     console.log(mmmm+ass);
// }
// motto("17");
// ПРоверка на висосный год
// const isLeapYear =(year: number) => {
//     const result = ((year % 400) === 0) || ((year % 4 === 0) && (year % 100 > 0));
//     console.log(result);
//     return result; 
//   }
//   // END
// isLeapYear(2018); // false
// isLeapYear(2017); // false
// isLeapYear(2016); // true
// вывод быквы по номеру
// BEGIN (write your solution here) - Реализуйте функцию convertText(), 
// которая принимает на вход строку и, если первая буква не заглавная, 
// возвращает перевернутый вариант исходной строки. Если первая буква заглавная, 
// то строка возвращается без изменений. Если на вход передана пустая строка, 
// функция должна вернуть пустую строку.
// // const convertText = (text:string) =>{
// //     if (text === ""){
// //       console.log('текст пустой');
// //       return "";
// //     }  
// //     else if (text[0] === text[0].toUpperCase()) {
// //       console.log("Пeрвая большая "+text);
// //       return text; 
// //     } 
// //     else {
// //       console.log("Пeрвая маленькая "+text);
// //       return text.toUpperCase;
// //     }
// //   }
// // convertText('Hello'); // 'Hello'
// // convertText('hello'); // 'olleh' 1
// //   // END
// // Реализуйте функцию joinNumbersFromRange(), которая объединяет все числа из диапазона в строку и возвращает её:
// const joinNumbersFromRange = (start,finish) => {
//     let i = start;
//     let result = "";
//     while (i <= finish) {
//       result = result + i;
//       i = i + 1;
//     }
//   return result;
//   }
//   // END
/* eslint-disable no-plusplus */
// BEGIN (write your solution here)
// Напишите функцию makeItFunny(), которая принимает на вход строку и возвращает её копию, 
// у которой каждый n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.
console.log("Запуск");
var makeItFunny = function (text, n) {
    var i = 1;
    var result = "";
    while (i <= text.length) {
        if ((i % n) === 0 && (i > 0)) {
            // записать болшую букву
            result = result + text[i - 1].toUpperCase();
            console.log("Проверка что I: " + i + " кратно N: " + n + " КРАТНО " + result);
        }
        else {
            //записать маленькую букву
            result = result + text[i - 1];
            console.log("Проверка что I: " + i + " кратно N: " + n + " НЕ КРАТНО " + result);
        }
        i = i + 1;
    }
    return result;
};
var text = 'I never look back';
// Каждый третий элемент
console.log(makeItFunny(text, 3)); // 'I NevEr LooK bAck'
// END
