// Show units (faren, slash, celci).
function showUnits(unit) {
    "use strict";

    // Gather elements. Make "real" array.
    const units = document.getElementsByClassName(unit);
    const unitsArray = Array.from(units);

    // Loop. Set display to "inline".
    unitsArray.forEach(function (item) {
        item.style.display = "inline";
    });
}

// Hide units (faren, slash, celci).
function hideUnits(unit) {
    "use strict";

    // Gather elements. Make "real" array.
    const units = document.getElementsByClassName(unit);
    const unitsArray = Array.from(units);

    // Loop. Set display to "none".
    unitsArray.forEach(function (item) {
        item.style.display = "none";
    });
}

export {showUnits, hideUnits};