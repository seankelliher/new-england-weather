// Show the units.
function showImperial() {
    const imperial = document.querySelectorAll(".imperial");
    const imperialArray = Array.from(imperial);

    imperialArray.forEach(function (imp) {
        imp.style.display = "inline";
    });

    const btnImp = document.getElementById("imperial-btn");
    btnImp.style.background = "#F0432A"; /* bright pink */
}

function showMetric() {
    const metric = document.querySelectorAll(".metric");
    const metricArray = Array.from(metric);

    metricArray.forEach(function (met) {
        met.style.display = "inline";
    });

    const btnMet = document.getElementById("metric-btn");
    btnMet.style.background = "#F0432A"; /* bright pink */
}

// Hide the units.
function hideImperial() {
    const imperial = document.querySelectorAll(".imperial");
    const imperialArray = Array.from(imperial);

    imperialArray.forEach(function (imp) {
        imp.style.display = "none";
    });

    const btnImp = document.getElementById("imperial-btn");
    btnImp.style.background = "#6E4828"; // lighter, not selected pink.
}

function hideMetric() {
    const metric = document.querySelectorAll(".metric");
    const metricArray = Array.from(metric);

    metricArray.forEach(function (met) {
        met.style.display = "none";
    });

    const btnMet = document.getElementById("metric-btn");
    btnMet.style.background = "#6E4828"; // lighter, not selected pink.
}

export {showImperial, showMetric, hideImperial, hideMetric};
