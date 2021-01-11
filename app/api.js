import {createElements} from "./elements.js";

function fetchWeather(station) {
    const apiBase = `https://api.weather.gov/stations/${station}/`;
    const apiLatest = "observations/latest?require_qc=false";
    const apiUrl = `${apiBase}${apiLatest}`;

    fetch(apiUrl).then(function (response) {
        return response.json();
    }).then(function (data) {
        const temperature = data.properties.temperature.value;
        const condition = data.properties.textDescription;
        createElements(station, temperature, condition);
    }).catch(function () {
        createElements(station, "error");
    });
}

export {fetchWeather};