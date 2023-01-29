// Замыкание функции
const afun = () => {
    let s = 1;    
    return () => {
        return s++
    }
}
const counter1=afun();
const counter2=afun();

console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter1());
 label = //label[span[contains(text(),"Будет")]]/input