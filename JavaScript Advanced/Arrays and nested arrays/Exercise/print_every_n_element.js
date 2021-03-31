function solve(someArray, number) {
    let resultArray = [];
    for (let i= 0; i < someArray.length; i+= number) {
        resultArray.push(someArray[i]);
    }

    return resultArray;
}

// console.log(solve(['5', '20', '31', '4', '20'], 2));