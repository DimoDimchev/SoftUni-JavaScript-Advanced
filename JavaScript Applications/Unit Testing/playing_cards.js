function factoryFunction(face, suit) {
    let obj = {
        face: face.toUpperCase(),
        suit: suit.toUpperCase(),
        toString: function() {
            let suits = {
                S: "\u2660",
                H: "\u2665",
                D: "\u2666",
                C: "\u2663",
            }
            console.log(`${this.face}${suits[this.suit]}`);
        }
    }
    if (![2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"].includes(obj.face)) {throw Error}
    if (!["S", "H", "D", "C"].includes(obj.suit)) {throw Error}

    return obj;
}