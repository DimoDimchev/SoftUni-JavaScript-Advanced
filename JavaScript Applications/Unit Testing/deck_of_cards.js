function solve(cards) {
    let message = null;

    let cardDeck = (function generateCards(array) {
        let deck = [];
        array.forEach(function (element) {
            let obj = {
                face: element.substring(0, element.length - 1).toUpperCase(),
                suit: element.substr(element.length - 1, 1).toUpperCase(),
            }

            if (!["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"].includes(obj.face) || !["S", "H", "D", "C"].includes(obj.suit)) {
                message = `Invalid card: ${obj.face}${obj.suit}`;
            }

            let suits = {
                S: "\u2660",
                H: "\u2665",
                D: "\u2666",
                C: "\u2663",
            }
            deck.push(`${obj.face}${suits[obj.suit]}`);
        })

        return deck.join(" ");
    })(cards);

    if (message !== null) {
        console.log(message);
    } else {
        console.log(cardDeck)
    }
}
