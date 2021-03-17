function sortArray(someArray) {
    someArray.sort(twoCriteriaSort);
    someArray.forEach(el => console.log(el));

    function twoCriteriaSort(a, b) {
        if (a.length === b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length;
    }
}