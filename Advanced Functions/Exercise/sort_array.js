function result(array, order) {
    if (order === "asc") {
        return (() => (array.sort((a, b) => {return a-b})))();
    } else {
        return (() => (array.sort((a, b) => {return b-a})))();

    }
}