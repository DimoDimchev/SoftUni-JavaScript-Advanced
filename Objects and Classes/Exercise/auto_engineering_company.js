function solve(someArray) {
    let finalObject = {};

    someArray.forEach(function (element) {
        let [brand, model, quantity] = element.split(" | ");

        if (finalObject.hasOwnProperty(brand)) {
            if (finalObject[brand].hasOwnProperty(model)) {
                finalObject[brand][model] += Number(quantity);
            } else {
                finalObject[brand][model] = Number(quantity);
            }
        } else {
            finalObject[brand] = {};
            finalObject[brand][model] = Number(quantity);
        }
    })
    for (let x in finalObject) {
        console.log(x);
        for (let i in finalObject[x]) {
            console.log(`###${i} -> ${finalObject[x][i]}`);
        }
    }
}

// solve(['Audi | Q7 | 1000',
//     'Audi | Q6 | 100',
//     'BMW | X5 | 1000',
//     'BMW | X6 | 100',
//     'Citroen | C4 | 123',
//     'Volga | GAZ-24 | 1000000',
//     'Lada | Niva | 1000000',
//     'Lada | Jigula | 1000000',
//     'Citroen | C4 | 22',
//     'Citroen | C5 | 10']);