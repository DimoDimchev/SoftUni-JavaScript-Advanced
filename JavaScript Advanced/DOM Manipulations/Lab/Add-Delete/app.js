function addItem() {
    let textContent = document.getElementById('newText').value;
    let listOfItems = document.getElementById('items');

    let newListElement = document.createElement('li');

    let remove = document.createElement("a");
    let linkText = document.createTextNode("[Delete]");
    remove.appendChild(linkText);
    remove.href = "#";
    remove.addEventListener("click", deleteItem);

    newListElement.innerHTML = textContent;

    newListElement.appendChild(remove);
    listOfItems.appendChild(newListElement);

    function deleteItem() {
        newListElement.remove();
    }
}