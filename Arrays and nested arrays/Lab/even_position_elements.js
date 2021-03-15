function findEvenPositions(numberArray) {
    let resultArray = [];

    numberArray.forEach(function (element) {
        if (numberArray.indexOf(element) % 2 == 0) {
            resultArray.push(element);
        }
    })
    return resultArray.join(" ")
}

// console.log(findEvenPositions(['20', '30', '40']));