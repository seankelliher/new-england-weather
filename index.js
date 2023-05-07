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

    const stations = ["KAUG", "KBOS", "KCON", "KHFD", "KMPV", "KPVD"];

    // Create the section elements.
    stations.forEach(function (station) {
        createElements(station);
    });

    // Fetch the weather. Results will complete sections.
    stations.forEach(function (station) {
        fetchWeather(station);
    });

    //Set date and time.
    getDateAndTime();

    // Update date and time every 10 seconds.
    window.setInterval(getDateAndTime, 10000);

    // Get the div with the "metric" and "imperial" buttons.
    const units = document.querySelector(".units");

    // Monitor metric & imperial buttons.
    // User clicks imperial button, show imperial units, hide metric units.
    // User clicks metric button, show metric units, hide imperial units.
    // Preference added to localStorage for return visits.
    // User does nothing, default unit is metric, set in app/elements.js.
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
