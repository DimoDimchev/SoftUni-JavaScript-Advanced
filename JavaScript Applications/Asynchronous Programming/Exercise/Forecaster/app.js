function attachEvents() {
    let locationBox = document.getElementById('location');
    let getWeatherButton = document.getElementById('submit');
    let forecast = document.getElementById('forecast');

    const weatherSymbols = {
        "Sunny": "&#x2600",
        "Partly sunny": "&#x26C5",
        "Overcast": "&#x2601",
        "Rain": "&#x2614",
        "Degrees": "&#176"
    }

    getWeatherButton.addEventListener('click', (e) => {
        let locationCode;
        fetch(`https://judgetests.firebaseio.com/locations.json`)
            .then(response => response.json())
            .then((data) => {
                let location = locationBox.value;
                locationCode = Object.values(data).filter(x => x.name === location)[0].code;

                return fetch(`https://judgetests.firebaseio.com/forecast/today/${locationCode}.json`)
            })
            .then(response => response.json())
            .then((data) => {
                forecast.style.display = 'block';
                forecast.firstElementChild.style.display = 'block';
                forecast.lastElementChild.style.display = 'block';

                let forecastDiv = document.createElement('div');


                forecastDiv.innerHTML =
                    `<span class="condition symbol">${weatherSymbols[data.forecast.condition]}</span>` +
                    `<span class="condition">` +
                    `<span class="forecast-data">${data.name}</span>` +
                    `<span class="forecast-data">${data.forecast.low}&#176;/${data.forecast.high}&#176;</span>` +
                    `<span class="forecast-data">${data.forecast.condition}</span>` +
                    `</span>`;

                forecast.firstElementChild.appendChild(forecastDiv);

                return fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${locationCode}.json`)
            })
            .then(response => response.json())
            .then((data) => {
                let forecastDiv = document.createElement('div');

                forecastDiv.innerHTML = data.forecast.map(x =>
                    `<span class="upcoming">` +
                    `<span class="symbol">${weatherSymbols[x.condition]}</span>` +
                    `<span class="forecast-data">${x.low}&#176;/${x.high}&#176;</span>` +
                    `<span class="forecast-data">${x.condition}</span>` +
                    `</span>`
                ).join('');

                forecast.lastElementChild.appendChild(forecastDiv);
            })
            .catch(err => {
                forecast.style.display = 'block';
                forecast.firstElementChild.style.display = 'none';
                forecast.lastElementChild.style.display = 'none';

                let p = document.createElement('p');
                p.textContent = err.message;
                forecast.appendChild(p);
            });
    })
}

attachEvents();