function solve(someArray) {
    let finalObject = {};

    someArray.forEach(function (element) {
        let processedElement = element.split(" <-> ");

        if (!(finalObject.hasOwnProperty(processedElement[0]))) {
            finalObject[processedElement[0]] = Number(processedElement[1]);
        } else {
            finalObject[processedElement[0]] += Number(processedElement[1]);
        }
    })

    for (let key in finalObject) {
        console.log(`${key} : ${finalObject[key]}`);
    }
}

// solve(['Sofia <-> 1200000',
//     'Montana <-> 20000',
//     'New York <-> 10000000',
//     'Washington <-> 2345000',
//     'Las Vegas <-> 1000000'])