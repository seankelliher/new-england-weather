import {
    showImperial,
    showMetric,
    hideImperial,
    hideMetric
} from "./choose-units.js";

function createElements(station) {
    // Get main element.
    const main = document.querySelector("main");

    // Create needed elements.
    const section = document.createElement("section");
    const list = document.createElement("dl");
    const loc = document.createElement("dt");

    // Assign id to section.
    list.id = station.toLowerCase();

    // Assign content to location.
    switch (station) {
    case "KAUG":
        loc.textContent = "Augusta, Maine";
        break;
    case "KBOS":
        loc.textContent = "Boston, Massachusetts";
        break;
    case "KCON":
        loc.textContent = "Concord, New Hampshire";
        break;
    case "KHFD":
        loc.textContent = "Hartford, Connecticut";
        break;
    case "KPVD":
        loc.textContent = "Providence, Rhode Island";
        break;
    case "KMPV":
        loc.textContent = "Montpelier, Vermont";
        break;
    default:
        loc.textContent = "An error occured.";
    }

    // Append elements.
    list.appendChild(loc);
    section.appendChild(list);
    main.appendChild(section);
}

function completeElements (
    station,
    temperature,
    condition,
    windSpeed,
    windDirectection,
    dewpoint,
    relativeHumidity) {

    // TEMP - create elements.
    const temp = document.createElement("dd");
    const tempC = document.createElement("span");
    const tempF = document.createElement("span");

    // TEMP - add classes.
    tempC.classList.add("metric");
    tempF.classList.add("imperial");

    // TEMP - convert to Fahrenheit.
    const tempConvertToF = (Math.round(temperature * 1.8) + 32);

    // TEMP - append content.
    if (temperature === "") {
        tempC.textContent = "Temperature is unavailable.";
        tempF.textContent = "Temperature is unavailable.";
    } else {
        tempC.textContent = `${temperature}°C `;
        tempF.textContent = `${tempConvertToF}° F`;
    }

    // TEMP - append elements.
    temp.appendChild(tempC);
    temp.appendChild(tempF);

    // CONDITION - create element.
    const cond = document.createElement("dd");

    // CONDITION - append content.
    if (condition === "") {
        cond.textContent = "Current conditions are unavailable.";
    } else {
        cond.textContent = `Current conditions are ${condition}.`;
    }

    // WIND - create elements.
    const wind = document.createElement("dd");
    const windSpeedKm = document.createElement("span");
    const windSpeedMi = document.createElement("span");
    const windDirect = document.createElement("span");

    // WIND - add classes.
    windSpeedKm.classList.add("metric");
    windSpeedMi.classList.add("imperial");

    // WINDSPEED - tidy windSpeed.
    let wsKm;
    let wsMi;
    if (windSpeed < 1 || windSpeed === null) {
        wsKm = "Winds are calm";
        wsMi = "Winds are calm";
    } else if (windSpeed === "") {
        wsKm = "Winds are unavailable.";
        wsMi = "Winds are unavailable.";
    } else {
        const roundKm = Math.round(windSpeed);
        const roundMi = Math.round(windSpeed * 0.621371); // 1km = 0.621371 mi.
        wsKm = `Winds are ${roundKm} km/h`;
        wsMi = `Winds are ${roundMi} mp/h`;
    }

    // WIND DIRECTION - tidy windDirection.
    let wd;
    if (windDirectection <= 90) {
        wd = " from the Northeast.";
    } else if (windDirectection > 90 && windDirectection <= 180) {
        wd = " from the Southeast.";
    } else if (windDirectection > 180 && windDirectection <= 270) {
        wd = " from the Southwest.";
    } else if (windDirectection > 270 && windDirectection <= 360) {
        wd = " from the Northwest.";
    } else if (windDirectection === null) {
        wd = "with no direction.";
    } else {
        wd = "wind direction unavailable.";
    }

    // WIND - append content, elements.
    windSpeedKm.textContent = `${wsKm}`;
    windSpeedMi.textContent = `${wsMi}`;
    windDirect.textContent = wd;
    wind.appendChild(windSpeedKm);
    wind.appendChild(windSpeedMi);
    wind.appendChild(windDirect);

    // DEWPOINT & HUMIDITY  - create elements.
    const dewHum = document.createElement("dd");
    const dewC = document.createElement("span");
    const dewF = document.createElement("span");
    const humid = document.createElement("span");

    // DEWPOINT & HUMIDITY - add classes.
    dewC.classList.add("metric");
    dewF.classList.add("imperial");

    // DEWPOINT - convert to Fahrenheit.
    const dewConvertToF = (Math.round(dewpoint * 1.8) + 32);

    // DEWPOINT - append content.
    if (dewpoint === "") {
        dewC.textContent = "Dewpoint is unavailable.";
        dewF.textContent = "Dewpoint is unavailable.";
    } else{
        dewC.textContent = `Dewpoint is ${dewpoint}° C.`;
        dewF.textContent = `Dewpoint is ${dewConvertToF}° F.`;
    }

    // DEWPOINT - append elements.
    dewHum.appendChild(dewC);
    dewHum.appendChild(dewF);
    dewHum.appendChild(humid);

    // HUMIDITY - append content, elements.
    const rh = Math.round(relativeHumidity);
    if (relativeHumidity === "") {
        humid.textContent = "Humidity is unavailable.";
    } else {
        humid.textContent = ` Humidity is ${rh}%.`;
    }

    // Get section for station being received.
    const sectionId = station.toLowerCase();
    const section = document.getElementById(sectionId);
    section.appendChild(temp);
    section.appendChild(cond);
    section.appendChild(wind);
    section.appendChild(dewHum);

    // Check localStorage to see if preferred unit is set.
    const preferUnit = localStorage.getItem("newEnglandWeather");

    // Show preferred unit, hide other one.
    // If nothing is set, use metric.
    if (preferUnit === "imperial") {
        hideMetric();
        showImperial();
    } else if (preferUnit === null || preferUnit == "metric") {
        hideImperial();
        showMetric();
    }
}

export { createElements, completeElements };