function createElements(station) {
    "use strict";

    //Get main element.
    const main = document.querySelector("main");

    //Create needed elements.
    const section = document.createElement("section");
    const h3tag = document.createElement("h3");
    const h2tag = document.createElement("h2");

    //Assign id to section.
    section.id = station.toLowerCase();

    //Assign content to h2 and h3.
    switch (station) {
    case "KAUG":
        h3tag.textContent = "Maine";
        h2tag.textContent = "Augusta";
        break;
    case "KBOS":
        h3tag.textContent = "Massachusetts";
        h2tag.textContent = "Boston";
        break;
    case "KCON":
        h3tag.textContent = "New Hampshire";
        h2tag.textContent = "Concord";
        break;
    case "KHFD":
        h3tag.textContent = "Connecticut";
        h2tag.textContent = "Hartford";
        break;
    case "KPVD":
        h3tag.textContent = "Rhode Island";
        h2tag.textContent = "Providence";
        break;
    case "KMPV":
        h3tag.textContent = "Vermont";
        h2tag.textContent = "Montpelier";
        break;
    default:
        h3tag.textContent = "Error";
        h2tag.textContent = "Error";
    }

    //Append elements.
    section.appendChild(h3tag);
    section.appendChild(h2tag);
    main.appendChild(section);
}

function completeElements(station, temperature, condition) {
    "use strict";

    //Create needed elements.
    const ptag1 = document.createElement("p");
    const ptag2 = document.createElement("p");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const span3 = document.createElement("span");

    //Assign content depending on API fetch result.
    if (temperature === "error") {
        span1.textContent = "error";
        span3.textContent = "not available";
        ptag2.textContent = "";
    } else {
        const faren = (temperature * 1.8 + 32); //Convert temperature
        const farenFixed = faren.toFixed(1); //to Fahrenheit.
        span1.textContent = `${farenFixed}\u00B0F`;
        span3.textContent = `${temperature}\u00B0C`;
        ptag2.textContent = `${condition}`;
    }

    //Assign content, used in all results.
    span2.textContent = " / ";

    //Assign needed class names.
    span1.className = "faren";
    span2.className = "slash";
    span3.className = "celci";
    ptag2.className = "details"; //for condition like "cloudy".

    //Append elements.
    ptag1.appendChild(span1);
    ptag1.appendChild(span2);
    ptag1.appendChild(span3);

    //Get section for station being received.
    const sectionId = station.toLowerCase();
    const section = document.getElementById(sectionId);

    //Append more elements.
    section.appendChild(ptag1);
    section.appendChild(ptag2);
}

export {createElements, completeElements};