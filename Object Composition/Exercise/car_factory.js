function solve(preferences) {
    let engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
    let carriages = [{ type: 'hatchback', color: preferences.color }, { type: 'coupe', color: preferences.color }];
    let wheelsize = preferences.wheelsize % 2 === 0 ? preferences.wheelsize - 1 : preferences.wheelsize;

    let result =  { model: preferences.model,
        engine: engines.filter(x => x.power >= preferences.power)[0],
        carriage: carriages.filter(x => x.type === preferences.carriage)[0],
        wheels: [wheelsize, wheelsize, wheelsize, wheelsize] }

    return result
}
//
// solve({ model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14 });