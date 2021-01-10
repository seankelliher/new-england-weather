import {createElements} from "./elements.js";

async function fetchWeather(station) {
    const apiUrl = `https://api.weather.gov/stations/${station}/observations?limit=1`;
    const response =  await fetch(apiUrl);
    const json = await response.json();

    const elevation = json.features[0].properties.elevation.value;
    const elevationUnit = json.features[0].properties.elevation.unitCode;
    const temperature = json.features[0].properties.temperature.value;
    //const temperatureUnit = json.features[0].properties.temperature.unitCode;
    const condition = json.features[0].properties.textDescription;

    createElements(station, temperature);
}

export{fetchWeather};