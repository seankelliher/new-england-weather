import {completeElements} from "./elements.js";

function fetchWeather(station) {
    const apiBase = `https://api.weather.gov/stations/${station}/`;
    const apiLatest = "observations/latest?require_qc=false";
    const apiUrl = `${apiBase}${apiLatest}`;

    fetch(apiUrl).then(function (response) {
        if (!response.ok) {
            throw new Error(`${station}: ${response.status}`);
        }
        return response.json();
    }).then(function (data) {
        const temperature = data.properties.temperature.value;
        const condition = data.properties.textDescription.toLowerCase();
        const windSpeed = data.properties.windSpeed.value; //if zero?
        const windDirection = data.properties.windDirection.value; //if null?
        const dewpoint = data.properties.dewpoint.value;
        const relativeHumidity = data.properties.relativeHumidity.value;
        completeElements(
            station,
            temperature,
            condition,
            windSpeed,
            windDirection,
            dewpoint,
            relativeHumidity
        );
    }).catch(function (error) {
        // Get the City, State with the error and display an error message.
        const eStation = `${station}`;
        const eStationLc = eStation.toLowerCase();
        const eSection = document.getElementById(eStationLc);
        const eCity = eSection.firstChild;
        const eCityText = eSection.firstChild.textContent;
        eCity.textContent = `${eCityText} is currently unavailable.`;
        console.log(error);
    });
}

export {fetchWeather};
