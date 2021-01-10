//Update "selected" element (in footer).
function updateSelected(x) {
    "use strict";

    //Remove any "selected" class.
    const selects = document.querySelectorAll(".selected");
    selects.forEach(function (select) {
        select.classList.remove("selected");
    });

    //Add "selected" class to link user clicked.
    const unit = "unit-" + x;
    const selected = document.getElementById(unit);
    selected.classList.add("selected");
}

export {updateSelected};