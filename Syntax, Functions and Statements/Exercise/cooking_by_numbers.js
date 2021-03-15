function cook(number, ...params) {
    let operatingNumber = Number(number)

    for (let i = 0; i < params.length; i++) {
        let operation = params[i];
        
        if (operation == "chop") {
            operatingNumber /= 2;
        } else if (operation == "dice") {
            operatingNumber = Math.sqrt(operatingNumber);
        } else if (operation == "spice") {
            operatingNumber++;
        } else if (operation == "bake") {
            operatingNumber *= 3;
        } else if (operation == "fillet") {
            operatingNumber -= 0.2 * operatingNumber;
        }

        console.log(operatingNumber);
    }
}

// cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
