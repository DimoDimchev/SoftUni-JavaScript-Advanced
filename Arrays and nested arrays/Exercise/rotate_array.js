function rotateArray(someArray, numberOfRotations) {
    for (let i = 0; i !== numberOfRotations; i++) {
        someArray.unshift(someArray.pop());
    }

    return someArray.join(" ");
}