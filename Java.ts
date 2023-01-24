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

const isLeapYear =(year: number) => {
    const result = ((year % 400) === 0) || ((year % 4 === 0) && (year % 100 > 0));
    console.log(result);
    return result; 
  }
  // END
  
isLeapYear(2018); // false
isLeapYear(2017); // false
isLeapYear(2016); // true
  