//Show Farenheit.
function showFarenheit() {
    "use strict";

    //Gather the Farenheit elements. Turn into real array.
    const farens = document.getElementsByClassName("faren");
    const farensArray = Array.from(farens);

    //For each loop, set display to inline.
    farensArray.forEach(function (faren) {
        faren.style.display = "inline";
    });
}

//Hide Farenheit.
function hideFarenheit() {
    "use strict";

    //Gather the Farenheit elements. Turn into real array.
    const farens = document.getElementsByClassName("faren");
    const farensArray = Array.from(farens);

    //For each loop, set display to none.
    farensArray.forEach(function (faren) {
        faren.style.display = "none";
    });
}

export {showFarenheit, hideFarenheit};