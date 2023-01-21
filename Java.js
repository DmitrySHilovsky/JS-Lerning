// let a = 10;
// a="sdfsdf";
// console.log(a); //hoisting - возможность поднимать определения переменных вверх листинга кода

const g = (a,b) =>a+b;  // вызов функции

g(10,5);

const h = (a,b) => {
    return a+b;
}

console.log(g(10,5)," Function G"); 
console.log(h(7,10)," Function H");
