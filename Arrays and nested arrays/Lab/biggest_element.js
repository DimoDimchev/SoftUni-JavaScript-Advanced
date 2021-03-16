function findBiggestNumber(nestedArray) {
    let concatenatedArray = [];

    nestedArray.forEach(function (element) {
        concatenatedArray = concatenatedArray.concat(element);
    })

    concatenatedArray.sort(function(a, b){return a-b});
    concatenatedArray.reverse();

    return concatenatedArray[0];
}

// console.log(findBiggestNumber([[3, 5, 7, 12],
//     [-1, 4, 33, 2],
//     [8, 3, 0, 4]]))