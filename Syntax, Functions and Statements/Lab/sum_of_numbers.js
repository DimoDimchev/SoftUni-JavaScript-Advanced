function sumNumbers(startNum, endNum) {
    let result = 0

    for (let i = Number(startNum); i <= Number(endNum); i++) {
        result += i;
    }

    console.log(result)
}

// sumNumbers('1', '5')