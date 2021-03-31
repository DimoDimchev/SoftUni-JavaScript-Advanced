function findSequence(arrayLength, numberToSum) {
    let resultArray = [1];

    for (let i = 1; i < arrayLength; i++) {
        resultArray.push(findSum(i, numberToSum));
    }

    function findSum(currentIndex, step) {
        let result;

        if (resultArray.length < step) {
            result = resultArray.slice(0, resultArray.length);
        } else {
            result = resultArray.slice((currentIndex - step), currentIndex);
        }
        let sum = 0;

        result.forEach(function (element) {
            sum += Number(element)
        })
        return sum;
    }
    return resultArray;
}
// console.log(findSequence(8, 2));