function fruitPrice(...input) {
    let fruitType = input[0];
    let weight = Number(input[1] / 1000);
    let price = Number(input[2] * weight);
    console.log(`I need $${price.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruitType}.`);
}


// fruitPrice('apple', 1563, 2.35)