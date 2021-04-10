let loadButton = document.getElementById('btnLoadTowns');
let townsInput = document.getElementById('towns');
let listItemView = document.getElementById('listItemTemplate').innerHTML;
let resultBox = document.getElementById('root').firstElementChild;

loadButton.addEventListener('click', createList);


function createList() {
    let towns = townsInput.value.split(", ").map(x => {return {name: x}});
    let template = Handlebars.compile(listItemView);
    resultBox.innerHTML = template({towns});
}

