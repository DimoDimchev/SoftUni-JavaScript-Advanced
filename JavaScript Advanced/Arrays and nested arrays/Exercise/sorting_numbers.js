function solve(someArray) {
    let increasingArray = Array.from(someArray);
    let decreasingArray = Array.from(someArray);

    increasingArray = increasingArray.sort((a, b) => {return a-b});
    decreasingArray = decreasingArray.sort((a, b) => {return b-a});

    let resultArray = [];

    while (resultArray.length !== someArray.length) {
        resultArray.push(increasingArray.shift());

        if (resultArray.length === someArray.length) {
            break;
        }

        resultArray.push(decreasingArray.shift());
    }
    return resultArray;
}

// console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));