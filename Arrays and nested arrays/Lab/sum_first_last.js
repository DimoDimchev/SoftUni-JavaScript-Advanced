function findSum(numberArray) {
    let firstNumber = Number(numberArray.shift());
    let secondNumber = Number(numberArray.pop());

    return firstNumber + secondNumber;
}

// console.log(findSum(['20', '30', '40']));