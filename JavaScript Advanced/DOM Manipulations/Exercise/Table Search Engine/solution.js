function solve() {
    let searchButton = document.getElementById('searchBtn');
    let searchField = document.getElementById('searchField');
    let dataElements = Array.from(document.querySelectorAll('tbody > tr'));

    searchButton.addEventListener('click', function () {
        let searchText = searchField.value;
        for (let x of dataElements) {
            if (x.hasAttribute('class')) {
                x.removeAttribute('class');
            }
        }

        for (let x of dataElements) {
            if (x.innerHTML.includes(searchText)) {
                x.setAttribute('class', 'select');
            }
        }
        searchField.value = '';
    });
}