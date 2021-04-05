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

        return someArray.slice(startIndex, endIndex + 1).reduce((accumulator, currentValue) => accumulator + +currentValue, 0)
    }
}
