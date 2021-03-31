function findGCD(...params) {
    let number1 = params[0];
    let number2 = params[1];

    let result = number1 % number2;
    while (result != 0) {
        number1 = number2;
        number2 = result;
        result = number1 % number2;
    }
    console.log(number2);
}

// findGCD(15, 5);