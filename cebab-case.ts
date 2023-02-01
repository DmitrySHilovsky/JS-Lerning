// Замыкание функции
const afun:Tfunc = ():Tfunc => {
    let s:number = 1;    
    return () => {
        return s++
    }
}
// nameUser - Camel case
// NameUser - Pascal case
// name-user - Kebab case

type Tfunc = () => {}

