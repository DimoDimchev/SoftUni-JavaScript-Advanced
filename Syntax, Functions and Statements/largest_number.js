function findLargest(num1, num2, num3) {
    let maxNumber = num1;

    if (num2 > maxNumber) {
        maxNumber = num2;
    }
    if (num3 > maxNumber) {
        maxNumber = num3;
    }

    console.log(`The largest number is ${maxNumber}.`);
}

// findLargest(-3, -5, -22.5)