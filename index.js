import {createElements} from "./app/elements.js";
import {fetchWeather} from "./app/api.js";
import {checkLocal, setLocal} from "./app/local.js";

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

    checkLocal();
    setLocal();
});