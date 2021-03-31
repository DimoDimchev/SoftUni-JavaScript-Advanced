function solve(arrayOfCommands) {
    let count = 0;
    let resultArray = [];

    arrayOfCommands.forEach(function (element) {
        count++;
        if (element === "add") {
            resultArray.push(count);
        } else if (element === "remove") {
            resultArray.pop();
        }
    })

    if (resultArray.length > 0) {
        resultArray.forEach(function (element) {
            console.log(element);
        })
    } else {
        console.log("Empty");
    }
}