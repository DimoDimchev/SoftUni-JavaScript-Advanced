function makeBottles(someArray) {
    let tempObject = {};
    let finalObject = {};

    someArray.forEach(function (element) {
        let [juice, quantity] = element.split(" => ");

        if (tempObject.hasOwnProperty(juice)) {
            tempObject[juice] += Number(quantity);
        } else {
            tempObject[juice] = Number(quantity);
        }

        if (tempObject[juice] >= 1000) {
            if (finalObject.hasOwnProperty(juice)) {
                finalObject[juice] += Math.floor(tempObject[juice] / 1000);
            } else {
                finalObject[juice] = Math.floor(tempObject[juice] / 1000);
            }
            tempObject[juice] = tempObject[juice] % 1000;
        }
    })
    for (let x in finalObject) {
        console.log(`${x} => ${finalObject[x]}`);
    }
}

// makeBottles(['Kiwi => 234',
//     'Pear => 2345',
//     'Watermelon => 3456',
//     'Kiwi => 4567',
//     'Pear => 5678',
//     'Watermelon => 6789']);