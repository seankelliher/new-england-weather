import {fetchWeather} from "./app/api.js";
import {checkLocal, setLocal} from "./app/local.js";

//When DOM loads...
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const stations = ["KAUG", "KBOS", "KCON", "KHFD", "KPVD", "KMPV"];

    stations.forEach(function (station) {
        fetchWeather(station);
    });

    checkLocal();
    setLocal();
});