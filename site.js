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

    //Function to show/hide Farenheit and Celcius (or display both).
    units: function () {
        "use strict";

        //Gather the svg and circles.
        const svg = document.querySelector("svg");
        const circleF = document.getElementById("circle-f");
        const circleB = document.getElementById("circle-b");
        const circleC = document.getElementById("circle-c");

        //Gather the Farenheit and Celcius elements within sections.
        const farens = document.getElementsByClassName("faren");
        const slashes = document.getElementsByClassName("slash");
        const celcis = document.getElementsByClassName("celci");

        //Makes real arrays from above node lists.
        const farensArray = Array.from(farens);
        const slashesArray = Array.from(slashes);
        const celcisArray = Array.from(celcis);

        //Function to show only Fahrenheit.
        function favorFaren() {
            circleF.style.fill = "#FF7043"; //deep orange 400.
            circleB.style.fill = "#FFF";
            circleC.style.fill = "#FFF";

            farensArray.forEach(function (fa) {
                fa.style.display = "inline";
            });

            slashesArray.forEach(function (sl) {
                sl.style.display = "none";
            });

            celcisArray.forEach(function (ce) {
                ce.style.display = "none";
            });
        }

        //Function to show both Fahrenheit and Celsius.
        function favorBoth() {
            circleF.style.fill = "#FFF";
            circleB.style.fill = "#FF7043"; //deep orange 400.
            circleC.style.fill = "#FFF";

            farensArray.forEach(function (fa) {
                fa.style.display = "inline";
            });

            slashesArray.forEach(function (sl) {
                sl.style.display = "inline";
            });

            celcisArray.forEach(function (ce) {
                ce.style.display = "inline";
            });
        }

        //Function to show only Celsius.
        function favorCelci() {
            circleF.style.fill = "#FFF";
            circleB.style.fill = "#FFF";
            circleC.style.fill = "#FF7043"; //deep orange 400.

            farensArray.forEach(function (fa) {
                fa.style.display = "none";
            });

            slashesArray.forEach(function (sl) {
                sl.style.display = "none";
            });

            celcisArray.forEach(function (ce) {
                ce.style.display = "inline";
            });
        }

        //Check local storage. If set, invoke matching function above.
        const favor = localStorage.getItem("favor");

        if (favor === "fahrenheit") {
            favorFaren();
        } else if (favor === "both") {
            favorBoth();
        } else if (favor === "celsius") {
            favorCelci();
        }

        //Monitor svg. If circle clicked, invoke matching function above.
        svg.addEventListener("click", function (event) {
            if (event.target.id === "circle-f") {
                favorFaren();
            } else if (event.target.id === "circle-b") {
                favorBoth();
            } else if (event.target.id === "circle-c") {
                favorCelci();
            }
        });
    },

    //Function to show "SET!" alert. Hide it 3 seconds later.
    setTxtAlert: function () {
        "use strict";

        const setTxt = document.getElementById("set-txt");

        setTxt.style.display = "inline";
        setTimeout(function () {
            setTxt.style.display = "none";
        }, 3000);
    },

    //Function to set local storage. Invoke above function for "SET!" alert.
    storage: function () {
        "use strict";

        //Gather the footer links.
        const footer = document.querySelector("footer");

        //Monitor footer. Whan a link is clicked, do the following.
        //Developing locally? - in Safari, "Disable local file restrictions".
        footer.addEventListener("click", function (event) {
            if (event.target.id === "default-f") {
                localStorage.setItem("favor", "fahrenheit");
                weatherAll.setTxtAlert();
            } else if (event.target.id === "default-b") {
                localStorage.setItem("favor", "both");
                weatherAll.setTxtAlert();
            } else if (event.target.id === "default-c") {
                localStorage.setItem("favor", "celsius");
                weatherAll.setTxtAlert();
            }
        });
    }

}; //close weatherAll.