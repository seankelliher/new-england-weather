function createElements(station, temperature) {
    "use strict";

    //Get main element.
    const main = document.querySelector("main");

    //Create needed elements.
    const section = document.createElement("section");
    const h3tag = document.createElement("h3");
    const h2tag = document.createElement("h2");
    const ptag = document.createElement("p");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const span3 = document.createElement("span");

    if (station === "KHFD") {
        h3tag.textContent = "Connecticut";
        h2tag.textContent = "Hartford";
    }

    if (station === "KAUG") {
        h3tag.textContent = "Maine";
        h2tag.textContent = "Augusta";
    }

    if (station === "KBOS") {
        h3tag.textContent = "Massachusetts";
        h2tag.textContent = "Boston";

    }

    if (station === "KCON") {
        h3tag.textContent = "New Hampshite";
        h2tag.textContent = "Concord";
    }

    if (station === "KPVD") {
        h3tag.textContent = "Rhode Island";
        h2tag.textContent = "Providence";
    }

    if (station === "KMPV") {
        h3tag.textContent = "Vermont";
        h2tag.textContent = "Montpelier";
    }

    const faren = (temperature * 1.8 + 32);
    const farenFixed = faren.toFixed(1);

    span1.textContent = `${farenFixed}\u00B0F`;
    span2.textContent = ` / `;
    span3.textContent = `${temperature}\u00B0C`;

    //Assign needed class names.
    span1.className = "faren";
    span2.className = "slash";
    span3.className = "celci";

    //Append.
    ptag.appendChild(span1);
    ptag.appendChild(span2);
    ptag.appendChild(span3);

    section.appendChild(h3tag);
    section.appendChild(h2tag);
    section.appendChild(ptag);

    main.appendChild(section);


}

export {createElements};