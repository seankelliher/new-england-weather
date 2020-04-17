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

}; //close weatherAll.