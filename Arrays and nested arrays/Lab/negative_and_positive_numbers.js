function positiveOrNegative(numberArray) {
    let resultArray = [];

    numberArray.forEach(function (element) {
        if (Number(element) < 0) {
            resultArray.unshift(element);
        } else {
            resultArray.push(element);
        }
    })

    resultArray.forEach(function (element) {
        console.log(element);
    })
}

// positiveOrNegative([7, -2, 8, 9]);