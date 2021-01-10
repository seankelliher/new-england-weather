//Show Slash.
function showSlash() {
    "use strict";

    //Gather the slashes elements. Turn into real array.
    const slashes = document.getElementsByClassName("slash");
    const slashesArray = Array.from(slashes);

    //For each loop, set display to inline.
    slashesArray.forEach(function (slash) {
        slash.style.display = "inline";
    });
}

//Hide Slash.
function hideSlash() {
    "use strict";

    //Gather the slashes elements. Turn into real array.
    const slashes = document.getElementsByClassName("slash");
    const slashesArray = Array.from(slashes);

    //For each loop, set display to none.
    slashesArray.forEach(function (slash) {
        slash.style.display = "none";
    });
}

export {showSlash, hideSlash};