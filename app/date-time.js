function getDateAndTime() {
    // Create current date.
    const theDate = new Date();

    // Add display options.
    const timeOptions = {hour: "numeric", minute: "2-digit"};
    const dateOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

    // Format time and day.
    const displayTime = theDate.toLocaleTimeString("en-US", timeOptions);
    const displayDate = theDate.toLocaleDateString("en-US", dateOptions);

    // Get the elements where they will be displayed.
    const dateSpace = document.getElementById("date-space");
    const timeSpace = document.getElementById("time-space");

    // Display them at top of app's page.
    dateSpace.textContent = displayDate;
    timeSpace.textContent = displayTime;
}

export {getDateAndTime};
