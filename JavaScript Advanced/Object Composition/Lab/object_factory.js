function solve(input) {
    input = JSON.parse(input);

    const concatenate = (a, o) => ({...a, ...o});
    const c = input.reduce(concatenate, {});

    return c;
}


// solve(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`);