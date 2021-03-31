function sortCatalogue(someArray) {
    let sortedArray = someArray.sort((a, b)=> {return a.localeCompare(b)});
    let finalObject = {};

    sortedArray.forEach(function (element) {
        let [name, price] = element.split(" : ");
        let firstLetter = name[0];

        if (finalObject.hasOwnProperty(firstLetter)) {
            finalObject[firstLetter][name] = Number(price);
        } else {
            finalObject[firstLetter] = {};
            finalObject[firstLetter][name] = Number(price);
        }
    })
    for (let x in finalObject) {
        console.log(`${x}`);
        for (let i in finalObject[x]) {
            console.log(`  ${i}: ${finalObject[x][i]}`);
        }
    }

}

// sortCatalogue(['Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10']);