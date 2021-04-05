function getInfo() {
    let stopID = document.getElementById('stopId').value;
    let stopName = document.getElementById('stopName');
    let busList = document.getElementById('buses');

    fetch( `https://judgetests.firebaseio.com/businfo/${stopID}.json`)
        .then((response) => response.json())
        .then(data => {
            stopName.innerText = data['name'];
            // let listElement = document.createElement('li');
            busList.innerHTML =Object.entries(data['buses']).map(([bus, minutes]) => `<li>Bus ${bus} arrives in ${minutes} minutes</li>`).join('');
        })
        .catch(err => {
            stopName.innerText = 'Error';
            busList.innerHTML = '';
        });
}