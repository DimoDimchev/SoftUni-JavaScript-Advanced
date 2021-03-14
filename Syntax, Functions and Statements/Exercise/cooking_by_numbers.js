function cook(number, ...params) {
    let operatingNumber = Number(number)

    for (let i = 0; i < params.length; i++) {
        let operation = params[i];
        if (operation == "chop") {
            operatingNumber /= 2;
            console.log(operatingNumber);
        } else if (operation == "dice") {
            operatingNumber = Math.sqrt(operatingNumber);
            console.log(operatingNumber);
        } else if (operation == "spice") {
            operatingNumber++;
            console.log(operatingNumber);
        } else if (operation == "bake") {
            operatingNumber *= 3;
            console.log(operatingNumber);
        } else if (operation == "fillet") {
            operatingNumber -= 0.2 * operatingNumber;
            console.log(operatingNumber);
        }
    }
}

// cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet');