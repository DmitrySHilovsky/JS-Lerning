// Замыкание функции
const afun = () => {
    let s = 1;    
    return () => {
        return s++
    }
}
// nameUser - Camel case
// NameUser - Pascal case
// name-user - Kebab case

