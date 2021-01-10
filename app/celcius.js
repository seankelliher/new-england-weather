//Show Celcius.
function showCelcius() {
    "use strict";

    //Gather the Celcius elements. Turn into real array.
    const celcis = document.getElementsByClassName("celci");
    const celcisArray = Array.from(celcis);

    //For each loop, set display to inline.
    celcisArray.forEach(function (celci) {
        celci.style.display = "inline";
    });
}

//Hide Celcius.
function hideCelcius() {
    "use strict";

    //Gather the Celcius elements. Turn into real array.
    const celcis = document.getElementsByClassName("celci");
    const celcisArray = Array.from(celcis);

    //For each loop, set display to none.
    celcisArray.forEach(function (celci) {
        celci.style.display = "none";
    });
}

export {showCelcius, hideCelcius};