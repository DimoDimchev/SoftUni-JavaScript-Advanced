function solve(someArray) {
    someArray.sort((a, b) => a.localeCompare(b));
    let counter = 1;

    someArray.forEach(function (element) {
        console.log(`${counter}.${element}`);
        counter++;
    })
}