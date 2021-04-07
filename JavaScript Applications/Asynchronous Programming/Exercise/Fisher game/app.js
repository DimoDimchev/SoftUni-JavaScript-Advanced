// angler - string representing the name of the person who caught the fish
// weight - floating-point number representing the weight of the fish in kilograms
// species - string representing the name of the fish species
// location - string representing the location where the fish was caught
// bait - string representing the bait used to catch the fish
// captureTime - integer number representing the time needed to catch the fish in minutes

// Pressing the [Load] button should list all catches.
// Pressing the [Update] button should send a PUT request, updating the catch in firebase.
// Pressing the [Delete] button should delete the catch both from firebase and from the page.
// Pressing the [Add] button should submit a new catch with the values of the inputs in the fieldset with id="addFrom".

function attachEvents() {
    let addButton = document.getElementsByClassName('add')[0];
    let loadButton = document.getElementsByClassName('load')[0];

    let body = document.getElementsByTagName('body')[0];
    let uri = `https://fisher-game.firebaseio.com/catches`;
    let catches = document.getElementById('catches');

    let addForm = document.getElementById('addForm');
    let anglerAdd = addForm.children[2];
    let weightAdd = addForm.children[4];
    let speciesAdd = addForm.children[6];
    let locationAdd = addForm.children[8];
    let baitAdd = addForm.children[10];
    let captureTimeAdd = addForm.children[12];


    loadButton.addEventListener('click', (e) => {
        fetch(uri + `.json`)
            .then(response => response.json())
            .then((data) => {
                catches.innerHTML = Object.keys(data).filter(x => data[x].angler !== '' && data[x].weight !== '' && data[x].species !== '' && data[x].location !== '' && data[x].bait !== '' && data[x].captureTime !== '')
                    .map(x =>
                        `<div class="catch" data-id="${x}">
                        <label>Angler</label>
            <input type="text" class="angler" value="${data[x].angler}" />
            <hr>
            <label>Weight</label>
            <input type="number" class="weight" value="${data[x].weight}" />
            <hr>
            <label>Species</label>
            <input type="text" class="species" value="${data[x].species}" />
            <hr>
            <label>Location</label>
            <input type="text" class="location" value="${data[x].location}" />
            <hr>
            <label>Bait</label>
            <input type="text" class="bait" value="${data[x].bait}" />
            <hr>
            <label>Capture Time</label>
            <input type="number" class="captureTime" value="${data[x].captureTime}" />
            <hr>
            <button class="update">Update</button>
            <button class="delete">Delete</button>
                    </div>`).join('');
            });
    });

    addButton.addEventListener('click', (e) => {
        if (anglerAdd.value !== '' && weightAdd.value !== '' && speciesAdd.value !== '' && locationAdd.value !== '' && baitAdd.value !== '' && captureTimeAdd.value !== '') {
            fetch(uri + `.json`, {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    "angler": anglerAdd.value,
                    "weight": weightAdd.value,
                    "species": speciesAdd.value,
                    "location": locationAdd.value,
                    "bait": baitAdd.value,
                    "captureTime": captureTimeAdd.value
                }),
            });
        }

        anglerAdd.value = '';
        weightAdd.value = '';
        speciesAdd.value = '';
        locationAdd.value = '';
        baitAdd.value = '';
        captureTimeAdd.value = '';
    });

    function updateCatch(element) {
        let anglerUpdate = element.children[1];
        let weightUpdate = element.children[4];
        let speciesUpdate = element.children[7];
        let locationUpdate = element.children[10];
        let baitUpdate = element.children[13];
        let captureTimeUpdate = element.children[16];

        let catchId = element.getAttribute('data-id');
        fetch(`${uri}/${catchId}.json`, {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                "angler": anglerUpdate.value,
                "weight": weightUpdate.value,
                "species": speciesUpdate.value,
                "location": locationUpdate.value,
                "bait": baitUpdate.value,
                "captureTime": captureTimeUpdate.value
            }),
        })
    }

    function deleteCatch(element) {
        let catchId = element.getAttribute('data-id');
        element.remove();

        fetch(`${uri}/${catchId}.json`, {
            method: 'DELETE',
        })
    }

    body.addEventListener('click', (e) => {
        if (e.target && e.target.nodeName === 'BUTTON' && e.target.className === 'update') {
            updateCatch(e.target.parentElement);
        } else if (e.target && e.target.nodeName === 'BUTTON' && e.target.className === 'delete') {
            deleteCatch(e.target.parentElement);
        }
    })
}

attachEvents();

