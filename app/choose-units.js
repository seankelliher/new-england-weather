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
    btnImp.style.background = "#ffdcc0"; // selected.
    btnImp.style.color = "#2d1600"; // selected.
}

function showMetric() {
    const metric = document.querySelectorAll(".metric");
    const metricArray = Array.from(metric);

    metricArray.forEach(function (met) {
        met.style.display = "inline";
    });

    const btnMet = document.getElementById("metric-btn"); // metric button.
    btnMet.style.background = "#ffdcc0"; // selected.
    btnMet.style.color = "#2d1600"; // selected.
}

// Functions to hide metric or imperial units.
function hideImperial() {
    const imperial = document.querySelectorAll(".imperial");
    const imperialArray = Array.from(imperial);

    imperialArray.forEach(function (imp) {
        imp.style.display = "none";
    });

    const btnImp = document.getElementById("imperial-btn"); // imperial button.
    btnImp.style.background = "#e9f1ff"; // not selected.
    btnImp.style.color = "#001d35"; // not selected.
}

function hideMetric() {
    const metric = document.querySelectorAll(".metric");
    const metricArray = Array.from(metric);

    metricArray.forEach(function (met) {
        met.style.display = "none";
    });

    const btnMet = document.getElementById("metric-btn"); // metric button.
    btnMet.style.background = "#e9f1ff"; // not selected.
    btnMet.style.color = "#001d35"; // not selected.
}

export {showImperial, showMetric, hideImperial, hideMetric};
