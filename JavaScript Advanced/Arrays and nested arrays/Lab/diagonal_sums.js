function sumDiagonals(nestedArray) {
    let mappedArray = mapArray(nestedArray);
    let rowLength = mappedArray[0].length;

    let index = 1;
    let secondIndex = 0;

    let diagonal1 = 0;
    let diagonal2 = 0;

    function mapArray(someArray) {
        someArray.forEach(function (element) {
            element.forEach(function (element) {
                element = Number(element);
            })
        })

        return someArray;
    }

    mappedArray.forEach(function (element) {
        diagonal1 += element[rowLength - index];
        index++;
    })

    mappedArray.forEach(function (element) {
        diagonal2 += element[secondIndex];
        secondIndex++;
    })

    console.log(`${diagonal2} ${diagonal1}`);
}

// sumDiagonals([[20, 40],
//     [10, 60]])