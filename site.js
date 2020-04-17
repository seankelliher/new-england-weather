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