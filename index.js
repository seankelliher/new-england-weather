import {getDateAndTime} from "./app/date-time.js";
import {createElements} from "./app/elements.js";
import {fetchWeather} from "./app/api.js";
import {
    showImperial,
    showMetric,
    hideImperial,
    hideMetric
} from "./app/choose-units.js";

// When DOM loads...
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const stations = ["KAUG", "KBOS", "KCON", "KHFD", "KMPV", "KPVD"];

    // Create the section elements.
    stations.forEach(function (station) {
        createElements(station);
    });

    // Fetch the weather. Results will complete sections.
    stations.forEach(function (station) {
        fetchWeather(station);
    });

    //Set date and time when DOM loads.
    getDateAndTime();

    // Update date and time every 10 seconds.
    window.setInterval(getDateAndTime, 10000);

    // Get the div with the "metric" and "imperial" buttons.
    const units = document.querySelector(".units");

    // Add an event listener. Users can select preferred units, if desired.
    // Preference added to localStorage for return visits.
    // Metric is the default unit, set in app/elements.js.
    units.addEventListener("click", function (event) {
        if (event.target.id === "metric-btn") {
            hideImperial();
            showMetric();
            localStorage.setItem("newEnglandWeather", "metric");
        }

        if (event.target.id === "imperial-btn") {
            hideMetric();
            showImperial();
            localStorage.setItem("newEnglandWeather", "imperial");
        }
    });
});
