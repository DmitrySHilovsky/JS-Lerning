const bayCar = (count) => {
    console.log("Купили тачку " + this.brand + " - " + this.model + " в количестве: " + count + " к оплате: " + count * this.price);
}

const car = {
    brand: "tesla",
    model: "model X",
    maxSpeed: 150,
    price: 20000,
    prod: true,
    bay: bayCar,
}


car.bay(4);
//??????????????????????????????????????????????????????????????
// Купили тачку undefined - undefined в количестве: 4 к оплате: NaN

const car2 = {
    brand: "tesla",
    model: "model X",
    maxSpeed: 150,
    price: 20000,
    prod: true,
    bay(count) {
        console.log("Купили тачку " + this.brand + " - " + this.model + " в количестве: " + count + " к оплате: " + count * this.price);
    }
}
car2.bay(4);

// norm

function bayCar3 (count) {
    console.log("Купили тачку " + this.brand + " - " + this.model + " в количестве: " + count + " к оплате: " + count * this.price);
}

const car3 = {
    brand: "tesla",
    model: "model X",
    maxSpeed: 150,
    price: 20000,
    prod: true,
    bay: bayCar3,
}
car3.bay(4);
