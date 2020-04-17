//The global variable.
let weather;

//When DOM loads, invoke the functions below.
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    weather.getSource();
    weather.checkLocal();
    weather.setLocal();
});

//The weather object.
weather = {

    //Object with weather info.
    //Note: "capitol" is not necessary. Just here for reference.
    noaa: [
        {
            state: "Connecticut",
            abbreviation: "ct",
            capitol: "Hartford",
            noaaid: "KHFD"
        },
        {
            state: "Maine",
            abbreviation: "me",
            capitol: "Augusta",
            noaaid: "KAUG"
        },
        {
            state: "Massachusetts",
            abbreviation: "ma",
            capitol: "Boston",
            noaaid: "KBOS"
        },
        {
            state: "New Hampshite",
            abbreviation: "nh",
            capitol: "Concord",
            noaaid: "KCON"
        },
        {
            state: "Rhode Island",
            abbreviation: "ri",
            capitol: "Providence",
            noaaid: "KPVD"
        },
        {
            state: "Vermont",
            abbreviation: "vt",
            capitol: "Montpelier",
            noaaid: "KMPV"
        }
    ],

    //Get the XML source to pull data from NOAA.
    getSource: function () {
        "use strict";

        weather.noaa.forEach(function (index) {
            const base = "https://w1.weather.gov/xml/current_obs/";
            const capitol = index.noaaid;
            const format = ".xml";
            const source = base + capitol + format;
            const abbr = index.abbreviation;
            const state = index.state;

            //Invoke next function, with parameters.
            weather.makeRequest(source, abbr, state);
        });
    },

    //Make the XML request to NOAA.
    makeRequest: function (source, abbr, state) {
        "use strict";

        //Iniatiate the request. True is Asynchronous Request.
        const request = new XMLHttpRequest();
        request.open("GET", source, true);

        //Specify the file type being requested.
        request.responseType = "xml";

        //When "request" loads and status is "okay" (200)...
        request.addEventListener("load", function () {

            if (request.status === 200) {
                //Extract the temperatures.
                const farenResult = request.responseXML.querySelector("temp_f");
                const celciResult = request.responseXML.querySelector("temp_c");

                //Determine the matching ids on the page.
                const farenId = "faren-" + abbr;
                const celciId = "celci-" + abbr;

                //Retrieve those ids.
                const farenElement = document.getElementById(farenId);
                const celciElement = document.getElementById(celciId);

                //Set the text content.
                farenElement.textContent = farenResult.textContent;
                celciElement.textContent = celciResult.textContent;
            } else {
                window.alert("Data for" + state + "unavailable now.");
            }
        });

        //Invoke the request (it won"t run automatically).
        request.send();
    },

    //Check local storage. If set, invoke matching function.
    checkLocal: function () {
        "use strict";

        const units = localStorage.getItem("units");

        if (units === "fahrenheit") {
            weather.showFarenheit();
            weather.hideSlash();
            weather.hideCelcius();
            weather.removeSelected();
            weather.addSelected("f");
        } else if (units === "celsius") {
            weather.hideFarenheit();
            weather.hideSlash();
            weather.showCelcius();
            weather.removeSelected();
            weather.addSelected("c");
        } else {
            weather.showFarenheit();
            weather.showSlash();
            weather.showCelcius();
            weather.removeSelected();
            weather.addSelected("b");
        }
    },

    //Show Farenheit.
    showFarenheit: function () {
        "use strict";

        //Gather the Farenheit elements. Turn into real array.
        const farens = document.getElementsByClassName("faren");
        const farensArray = Array.from(farens);

        //For each loop, set display to inline.
        farensArray.forEach(function (faren) {
            faren.style.display = "inline";
        });
    },

    //Hide Farenheit.
    hideFarenheit: function () {
        "use strict";

        //Gather the Farenheit elements. Turn into real array.
        const farens = document.getElementsByClassName("faren");
        const farensArray = Array.from(farens);

        //For each loop, set display to none.
        farensArray.forEach(function (faren) {
            faren.style.display = "none";
        });
    },

    //Show Slash.
    showSlash: function () {
        "use strict";

        //Gather the slashes elements. Turn into real array.
        const slashes = document.getElementsByClassName("slash");
        const slashesArray = Array.from(slashes);

        //For each loop, set display to inline.
        slashesArray.forEach(function (slash) {
            slash.style.display = "inline";
        });
    },

    //Hide Slash.
    hideSlash: function () {
        "use strict";

        //Gather the slashes elements. Turn into real array.
        const slashes = document.getElementsByClassName("slash");
        const slashesArray = Array.from(slashes);

        //For each loop, set display to none.
        slashesArray.forEach(function (slash) {
            slash.style.display = "none";
        });
    },

    //Show Celcius.
    showCelcius: function () {
        "use strict";

        //Gather the Celcius elements. Turn into real array.
        const celcis = document.getElementsByClassName("celci");
        const celcisArray = Array.from(celcis);

        //For each loop, set display to inline.
        celcisArray.forEach(function (celci) {
            celci.style.display = "inline";
        });
    },

    //Hide Celcius.
    hideCelcius: function () {
        "use strict";

        //Gather the Celcius elements. Turn into real array.
        const celcis = document.getElementsByClassName("celci");
        const celcisArray = Array.from(celcis);

        //For each loop, set display to none.
        celcisArray.forEach(function (celci) {
            celci.style.display = "none";
        });
    },

}; //close weatherAll.