let uri = `https://test-project-ecb56-default-rtdb.firebaseio.com`;
let body = document.getElementsByTagName('body')[0];


let submitButton = document.getElementById('submit');
let loadButton = document.getElementById('loadBooks');

let authorField = document.getElementById('author');
let titleField = document.getElementById('title');
let isbnField = document.getElementById('isbn');

let bookTable = document.getElementById('bookTable');

submitButton.addEventListener('click', submitBook);
loadButton.addEventListener('click', loadBooks);


function createDOMElement(tag, attributes, content, ...children) {
    const element = document.createElement(tag);
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    if (content !== '') {
        element.textContent = content;
    }

    element.append(...children);
    return element;
}

function submitBook(e) {
    if (authorField.value !== "" && titleField.value !== "" && isbnField.value !== "") {
        fetch(uri + `/books.json`, {
            method: "POST",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                author: authorField.value,
                title: titleField.value,
                isbn: isbnField.value,})
        })
        .then(res => loadBooks())
        .catch(err => console.log(err))

        console.log('New book posted');
    } else {
        console.log('error')
    }

    authorField.value = "";
    titleField.value = "";
    isbnField.value = "";
}

function loadBooks() {
    fetch(uri + `/books.json`)
        .then(result => result.json())
        .then(data => {
            let fragment = new DocumentFragment();
            Object.entries(data).forEach(([key, {title, author, isbn}]) => {
                let tr = createDOMElement('tr', {}, '',
                    createDOMElement('td', {'id': key}, title),
                    createDOMElement('td', {}, author),
                    createDOMElement('td', {}, isbn),
                    createDOMElement('td', {}, '',
                        createDOMElement('button', { 'value': key, 'id': 'edit'}, 'Edit'),
                        createDOMElement('button', { 'value': key, 'id': 'del'}, 'Delete'))
                );
                fragment.appendChild(tr);
            });

            bookTable.innerHTML = '';
            bookTable.appendChild(fragment);
        })
}

body.addEventListener('click', (evt) => {
    if (evt.target.nodeName === "BUTTON" && evt.target.value !== '' && evt.target.id === 'del') {
        fetch(uri + `/books/${evt.target.value}.json`, {method: "DELETE",})
            .then(res => loadBooks());
        // console.log(evt.target)
    }
})

body.addEventListener('click', (evt) => {
    if (evt.target.nodeName === "TD" && evt.target.id !== '') {
        titleField.value = evt.target.innerHTML;
        authorField.value = evt.target.parentElement.children[1].innerHTML;
        isbnField.value = evt.target.parentElement.children[2].innerHTML;

        let bookId = evt.target.id;
        console.log(bookId)

        body.addEventListener('click', (evt) => {
            if (evt.target.nodeName === "BUTTON" && evt.target.value === bookId && evt.target.id === 'edit') {
                console.log(evt.target.value);
                fetch(uri + `/books/${evt.target.value}.json`, {
                    method: "PUT",
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify({ "title": titleField.value, "author": authorField.value, "isbn": isbnField.value }),
                })
                    .then(res => loadBooks());


                authorField.value = "";
                titleField.value = "";
                isbnField.value = "";
                bookId = '';
            }
        })
    }
})