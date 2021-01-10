import {showFarenheit, hideFarenheit} from "./farenheit.js";
import {showCelcius, hideCelcius} from "./celcius.js";
import {showSlash, hideSlash} from "./slash.js";
import {removeSelected, addSelected} from "./selected.js";

//Function to show "SET!" alert. Hide it 2 seconds later.
function setTxtAlert() {
    "use strict";

    const setTxt = document.getElementById("set-txt");

    setTxt.style.display = "inline";
    setTimeout(function () {
        setTxt.style.display = "none";
    }, 2000);
}

//Check local storage. If set, invoke matching function.
function checkLocal() {
    "use strict";

    const units = localStorage.getItem("units");

    if (units === "fahrenheit") {
        showFarenheit();
        hideSlash();
        hideCelcius();
        removeSelected();
        addSelected("f");
    } else if (units === "celsius") {
        hideFarenheit();
        hideSlash();
        showCelcius();
        removeSelected();
        addSelected("c");
    } else {
        showFarenheit();
        showSlash();
        showCelcius();
        removeSelected();
        addSelected("b");
    }
}

//Set local storage.
function setLocal() {
    "use strict";

    //Gather the footer element.
    const footer = document.querySelector("footer");

    //Monitor footer. Whan a link is clicked...
    //Set local storage. Check local storage. Checking shows/hides temps.
    //Developing locally? - in Safari, "Disable local file restrictions".
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