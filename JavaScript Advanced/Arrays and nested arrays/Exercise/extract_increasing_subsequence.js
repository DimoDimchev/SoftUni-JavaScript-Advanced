function solve(someArray) {
    let currentMax = someArray[0];
    let resultArray = [];

    someArray.forEach(function (element) {
        if (element >= currentMax) {
            resultArray.push(element);
            currentMax = element;
        }
    })

    return resultArray;
}