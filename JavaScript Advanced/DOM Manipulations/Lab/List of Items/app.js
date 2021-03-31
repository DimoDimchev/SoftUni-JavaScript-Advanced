function addItem() {
    let textContent = document.getElementById('newItemText').value;
    let listOfItems = document.getElementById('items');

    let newListElement = document.createElement('li');

    newListElement.innerHTML = textContent;
    listOfItems.appendChild(newListElement);
}