function solve(someArray, startIndex, endIndex) {
    if (!Array.isArray(someArray)) {
        return NaN;
    } else {
        if (startIndex < 0) {
            startIndex = 0;
        }

        if (endIndex >= someArray.length) {
            endIndex = someArray.length - 1;
        }

        return someArray.slice(startIndex, endIndex + 1).reduce((accumulator, currentValue) => accumulator + +currentValue)
    }
}

console.log(solve([10, 'twenty', 30, 40], 0, 2))