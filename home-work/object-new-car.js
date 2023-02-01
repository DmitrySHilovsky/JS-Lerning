const carPrices = {
    tesla: {
        "modelS": 500000,
        "modelX": 600000,
        "modelT": 700000,
        "777": 900000,
    },
    lada: {
        2106: 100000,
        2107: 150000,
    }
}

function carCalculator(carPrice, carCount) {
    return carPrice * carCount;
}

function Car(model, price) {
    this.model = model;
    this.getBrand = function (model) {
        if (model === "ModelS" || model === "ModelX" || model === "ModelT") {
            return "Tesla";
        } else if (model === "2106" || model === "2107") {
            return "Lada";
        }
        else { console.log("что за тачка?") };
    }

}
function getPriceByModel(pricelist, car) {
    for (let key in pricelist) {
        let propPriceList = pricelist[key];
        for (let propKey in propPriceList) {
            if (propKey == car) {
                console.log(key + ': ' + propKey + ':' + propPriceList[propKey] + " проверка: " + car);
                return propPriceList[propKey];
            }
        }
    }
}


function carBay(model, count) {
    let carPrice = getPriceByModel(carPrices, model)
    console.log(carCalculator(carPrice, count));
}

carBay("modelS", 1);
carBay("modelS", 3);
carBay("modelX", 1);
carBay("modelT", 1);
carBay("2106", 1);
carBay("2106", 4);
carBay("2107", 1);
carBay("777", 1);

