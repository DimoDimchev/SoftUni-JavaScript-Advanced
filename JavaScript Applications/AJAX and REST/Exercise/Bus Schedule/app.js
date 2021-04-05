function solve() {
    let info = document.querySelector('#info .info');
    let departButton = document.getElementById('depart');
    let arriveButton = document.getElementById('arrive');
    let uri = `https://judgetests.firebaseio.com/schedule/depot.json`

    function depart() {
        departButton.setAttribute('disabled', 'true');
        arriveButton.removeAttribute('disabled');

        fetch(uri)
            .then((response) => response.json())
            .then(data => {
                info.innerHTML = `Next stop ${data.name}`;
            })
            .catch(() => {
                info.textContent = 'Error';
                departButton.setAttribute('disabled', 'true');
                arriveButton.setAttribute('disabled', 'true');
            });
    }

    function arrive() {
        arriveButton.setAttribute('disabled', 'true');
        departButton.removeAttribute('disabled');

        fetch(uri)
            .then((response) => response.json())
            .then(data => {
                info.innerHTML = `Arriving at ${data.name}`;
                uri = `https://judgetests.firebaseio.com/schedule/${data.next}.json`
            })
            .catch(() => {
                info.textContent = 'Error';
                departButton.setAttribute('disabled', 'true');
                arriveButton.setAttribute('disabled', 'true');
            });
    }

    return {
        depart,
        arrive
    };
}

let result = solve();