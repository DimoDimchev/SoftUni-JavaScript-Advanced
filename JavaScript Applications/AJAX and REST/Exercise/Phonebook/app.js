function attachEvents() {
    let uri = `https://phonebook-nakov.firebaseio.com/phonebook`

    let body = document.getElementsByTagName('body')[0];

    let person = document.getElementById('person');
    let phone = document.getElementById('phone');

    let phoneBook = document.getElementById('phonebook');
    let createButton = document.getElementById('btnCreate');
    let loadButton = document.getElementById('btnLoad');

    loadButton.addEventListener('click',  getAll);

    function getAll() {
        fetch(uri + ".json")
            .then(response => response.json())
            .then(data => phoneBook.innerHTML = Object.entries(data)
                .filter(entry => entry[1].person !== '' && entry[1].phone !== '')
                .map(entry => `<li>${entry[1].person}: ${entry[1].phone}<button value="${entry[0]}">Delete</button></li>`)
                .join(''))
    }

    createButton.addEventListener('click', () => {
        if (phone.value !== '' && person.value !== '') {
            fetch(uri + '.json', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({person: person.value, phone: phone.value}),
            });

            person.value = '';
            phone.value = '';
        }
    })

    body.addEventListener('click', (evt) => {
        if (evt.target.nodeName === "BUTTON" && evt.target.value !== '') {
            fetch(uri + `/${evt.target.value}/.json`, {method: "DELETE"});
        }
    })
}

attachEvents();