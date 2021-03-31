// Apple - made with 1 carb and 2 flavour
// Lemonade - made with 10 carb and 20 flavour
// Burger - made with 5 carb, 7 fat and 3 flavour
// Eggs - made with 5 protein, 1 fat and 1 flavour
// Turkey - made with 10 protein, 10 carb, 10 fat and 10 flavour

// restock <microelement> <quantity> - increases the stored quantity of the given microelement
// prepare <recipe> <quantity> - uses the available ingredients to prepare the given meal
// report - returns information about the stored microelements, in the order described below, including zero elements


function solution() {
    let microElements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    const recipes = {
        'apple': (qty) => {
            if (microElements.carbohydrate - 1 * qty < 0) return 'carbohydrate';
            if (microElements.flavour - 2 * qty < 0) return 'flavour';
            microElements.carbohydrate -= 1 * qty;
            microElements.flavour -= 2 * qty;
            return 'Success'
        },
        'lemonade': (qty) => {
            if (microElements.carbohydrate - 10 * qty < 0) return 'carbohydrate';
            if (microElements.flavour - 20 * qty < 0) return 'flavour';
            microElements.carbohydrate -= 10 * qty;
            microElements.flavour -= 20 * qty;
            return 'Success';
        },
        'burger': (qty) => {
            if (microElements.carbohydrate - 5 * qty < 0) return 'carbohydrate';
            if (microElements.fat - 7 * qty < 0) return 'fat';
            if (microElements.flavour - 3 * qty < 0) return 'flavour';
            microElements.carbohydrate -= 5 * qty;
            microElements.fat -= 7 * qty;
            microElements.flavour -= 3 * qty;
            return 'Success';
        },
        'eggs': (qty) => {
            if (microElements.protein - 5 * qty < 0) return 'protein';
            if (microElements.fat - 1 * qty < 0) return 'fat';
            if (microElements.flavour - 1 * qty < 0) return 'flavour';
            microElements.protein -= 5 * qty;
            microElements.fat -= 1 * qty;
            microElements.flavour -= 1 * qty;
            return 'Success';
        },
        'turkey': (qty) => {
            if (microElements.protein - 10 * qty < 0) return 'protein';
            if (microElements.carbohydrate - 10 * qty < 0) return 'carbohydrate';
            if (microElements.fat - 10 * qty < 0) return 'fat';
            if (microElements.flavour - 10 * qty < 0) return 'flavour';
            microElements.protein -= 10 * qty;
            microElements.carbohydrate -= 10 * qty;
            microElements.fat -= 10 * qty;
            microElements.flavour -= 10 * qty;
            return 'Success';
        },
    };

    return function (instruction) {
        let [command, product, quantity] = instruction.split(" ");

        if (command === "restock") {
            microElements[product] += +quantity;
            return 'Success'
        } else if (command === "prepare") {
            let response = recipes[product](quantity);
            return (response === "Success") ? "Success" : `Error: not enough ${response} in stock`
        } else {
            return `protein=${microElements.protein} carbohydrate=${microElements.carbohydrate} fat=${microElements.fat} flavour=${microElements.flavour}`;
        }
    }
}
