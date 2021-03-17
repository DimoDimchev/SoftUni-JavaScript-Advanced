function solve(input) {
    let data = input
        .map(row => row.split('|').filter(x => x !== '').map(x => x.trim()));

    let properties = data.shift();
    let result = [];

    data.forEach(row => {
        let town = {
            'Town' : row[0],
            'Latitude' : Number(Number(row[1]).toFixed(2)),
            'Longitude' : Number(Number(row[2]).toFixed(2))
        };

        result.push(town);
    })

    console.log(JSON.stringify(result));
}