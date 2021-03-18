function sumByTown(someArray) {
    let finalObject = {};

    for (let i = 0; i + 1 < someArray.length; i+=2) {
        if (!(finalObject.hasOwnProperty(someArray[i]))) {
            finalObject[someArray[i]] = Number(someArray[i + 1]);
        } else {
            finalObject[someArray[i]] += Number(someArray[i + 1]);
        }
    }

    return JSON.stringify(finalObject);
}

// console.log(sumByTown(['Sofia','20','Varna','3','Sofia','5','Varna','4']));