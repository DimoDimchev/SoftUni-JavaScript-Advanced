function findSmallestNums(numberArray) {
    let resultArray = [];

    for (let i = 0; i < 2; i++) {
        let smallestElement = numberArray[0];

        for (let j = 0; j < numberArray.length; j++) {
            if (numberArray[j] < smallestElement) {
                smallestElement = numberArray[j];
            }
        }
        numberArray.splice(numberArray.indexOf(smallestElement), 1);
        resultArray.push(smallestElement);
    }

    return resultArray.join(" ");
}

// console.log(findSmallestNums([30, 15, 50, 5]))