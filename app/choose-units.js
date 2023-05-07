// Some weather data like humidity uses universal units such as percent.
// Temperature, dewpoint, wind speed - use metric or imperial units.
// NWS's API returns metric data. App coverts data to imperial. 
// Both units get stored in spans.
// Below functions show/hide spans based on unit a user selects.

// Functions to show metric or imperial units.
function showImperial() {
    const imperial = document.querySelectorAll(".imperial");
    const imperialArray = Array.from(imperial);

    imperialArray.forEach(function (imp) {
        imp.style.display = "inline";
    });

    const btnImp = document.getElementById("imperial-btn"); // imperial button.
    btnImp.style.background = "#f0432a"; // orange, selected.
}

function showMetric() {
    const metric = document.querySelectorAll(".metric");
    const metricArray = Array.from(metric);

    metricArray.forEach(function (met) {
        met.style.display = "inline";
    });

    const btnMet = document.getElementById("metric-btn"); // metric button.
    btnMet.style.background = "#f0432a"; // orange, selected.
}

// Functions to hide metric or imperial units.
function hideImperial() {
    const imperial = document.querySelectorAll(".imperial");
    const imperialArray = Array.from(imperial);

    imperialArray.forEach(function (imp) {
        imp.style.display = "none";
    });

    const btnImp = document.getElementById("imperial-btn"); // imperial button.
    btnImp.style.background = "#6e4828"; // brown, not selected.
}

function hideMetric() {
    const metric = document.querySelectorAll(".metric");
    const metricArray = Array.from(metric);

    metricArray.forEach(function (met) {
        met.style.display = "none";
    });

    const btnMet = document.getElementById("metric-btn"); // metric button.
    btnMet.style.background = "#6e4828"; // brown, not selected.
}

export {showImperial, showMetric, hideImperial, hideMetric};
