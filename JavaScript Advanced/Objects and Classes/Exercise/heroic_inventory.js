function sortInventory(someArray) {
    let result = [];

    someArray.forEach(function (element) {
        let [name, level, items] = element.split(" / ");
        level = Number(level);

        items = items ? items.split(", ") : [];

        result.push({name, level, items});
    })

    return JSON.stringify(result);
}