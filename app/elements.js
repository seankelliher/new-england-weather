function createElements(station, temperature, condition) {
    "use strict";

    //Get main element.
    const main = document.querySelector("main");

    //Create needed elements.
    const section = document.createElement("section");
    const h3tag = document.createElement("h3");
    const h2tag = document.createElement("h2");
    const ptag1 = document.createElement("p");
    const ptag2 = document.createElement("p");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const span3 = document.createElement("span");

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
        h3tag.textContent = "New Hampshite";
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

    //Assign content depending on API fetch result.
    if (temperature === "error") {
        span1.textContent = "error";
        span3.textContent = "not available";
        ptag2.textContent = "";
    } else {
        const faren = (temperature * 1.8 + 32); //Convert temperature
        const farenFixed = faren.toFixed(1); //to Farenheit.
        span1.textContent = `${farenFixed}\u00B0F`;
        span3.textContent = `${temperature}\u00B0C`;
        ptag2.textContent = condition;
    }

    //Assign content, all cases.
    span2.textContent = " / ";

    //Assign needed class names.
    span1.className = "faren";
    span2.className = "slash";
    span3.className = "celci";
    ptag2.className = "details"; //for condition like "cloudy".

    //Append tags.
    ptag1.appendChild(span1);
    ptag1.appendChild(span2);
    ptag1.appendChild(span3);

    //Append elements.
    section.appendChild(h3tag);
    section.appendChild(h2tag);
    section.appendChild(ptag1);
    section.appendChild(ptag2);
    main.appendChild(section);
}

export {createElements};