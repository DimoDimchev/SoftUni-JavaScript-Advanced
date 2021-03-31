function solve(nestedArray) {
    let sumOfRow = 0;
    let isMagic = true;

    for (let i = 0; i < nestedArray[0].length; i++){
        sumOfRow += nestedArray[0][i];
    }

    for (let i = 0; i < nestedArray[0].length; i++) {
        let sumOfCurrentCol = 0;
        for (let j = 0; j < nestedArray.length; j++ ) {
            sumOfCurrentCol += nestedArray[j][i];
        }
        if (sumOfCurrentCol !== sumOfRow) {
            isMagic = false;
        }
    }

    nestedArray.forEach(function (element) {
        let sumOfCurrentRow = 0;
        let currentIndex = nestedArray.indexOf(element);

        for (let i = 0; i < nestedArray[currentIndex].length; i++){
            sumOfCurrentRow += nestedArray[currentIndex][i];
        }
        if (sumOfCurrentRow !== sumOfRow) {
            isMagic = false;
        }
    })
    return isMagic;
}