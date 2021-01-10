import {showFarenheit, hideFarenheit} from "./farenheit.js";
import {showCelcius, hideCelcius} from "./celcius.js";
import {showSlash, hideSlash} from "./slash.js";
import {updateSelected} from "./selected.js";

//Show "SET!" alert. Hide it 2 seconds later.
function setTxtAlert() {
    "use strict";

    const setTxt = document.getElementById("set-txt");

    setTxt.style.display = "inline";
    setTimeout(function () {
        setTxt.style.display = "none";
    }, 2000);
}

//Check local storage.
//If set to "x", invoke functions to display "x", hide "y".
//If unset, invoke functions to display "x" and "y".
function checkLocal() {
    "use strict";

    const units = localStorage.getItem("units");

    if (units === "fahrenheit") {
        showFarenheit();
        hideSlash();
        hideCelcius();
        updateSelected("f");
    } else if (units === "celsius") {
        hideFarenheit();
        hideSlash();
        showCelcius();
        updateSelected("c");
    } else {
        showFarenheit();
        showSlash();
        showCelcius();
        updateSelected("b");
    }
}

//Set local storage.
function setLocal() {
    "use strict";

    //Gather the footer element.
    const footer = document.querySelector("footer");

    //Monitor footer. When link clicked...
    //Set local storage.
    //Invoke checkLocal function to show/hide elements.
    footer.addEventListener("click", function (event) {
        if (event.target.id === "unit-f") {
            localStorage.setItem("units", "fahrenheit");
            checkLocal();
            setTxtAlert();
        } else if (event.target.id === "unit-c") {
            localStorage.setItem("units", "celsius");
            checkLocal();
            setTxtAlert();
        } else if (event.target.id === "unit-b") {
            localStorage.setItem("units", "both");
            checkLocal();
            setTxtAlert();
        }
    });
}

export {checkLocal, setLocal};