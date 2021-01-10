//Remove "selected" class.
function removeSelected() {
    "use strict";

    //Gather all elements that contain the class "selected".
    const selects = document.querySelectorAll(".selected");

    //Remove them.
    selects.forEach(function (select) {
        select.classList.remove("selected");
    });
}

//Add "selected" class.
function addSelected(x) {
    "use strict";

    const unit = "unit-" + x;

    //Get the selected element. Add "selected" class.
    const selected = document.getElementById(unit);
    selected.classList.add("selected");
}

export {removeSelected, addSelected};