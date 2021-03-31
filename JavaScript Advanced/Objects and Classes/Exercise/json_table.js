function solve(someArray) {
    let result = "<table>\n";

    someArray.forEach(function (element) {
        result += "\t<tr>\n"
        let currentObj = JSON.parse(element);
        for (let x in currentObj) {
            result += `\t\t` + `<td>${currentObj[x]}</td>\n`
        }
        result += "\t</tr>\n"

    })
    result += "</table>";

    return result
}

// console.log(solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
//     '{"name":"Teo","position":"Lecturer","salary":1000}',
//     '{"name":"Georgi","position":"Lecturer","salary":1000}']))
