import {createElements} from "./elements.js";

function fetchWeather(station) {
    const apiBase = `https://api.weather.gov/stations/${station}/`;
    const apiLatest = "observations/latest?require_qc=false";
    const apiUrl = `${apiBase}${apiLatest}`;

    fetch(apiUrl).then(function (response) {
        return response.json();
    }).then(function (data) {
        //const elevation = data.properties.elevation.value;
        //const elevationUnit = data.properties.elevation.unitCode;
        const temperature = data.properties.temperature.value;
        //const temperatureUnit = data.properties.temperature.unitCode;
        //const condition = data.properties.textDescription;

        createElements(station, temperature);
    }).catch(function () {
        createElements(station, "error");
    });
}

export {fetchWeather};