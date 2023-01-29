const currentDayEl = $('#currentDay');
const formEl = $('#event-form');
const now = moment();
const currentHour = parseInt(now.format("H"));

currentDayEl.text(now.format('dddd, MMMM Do'));

hourArray = new Array(24);

// set up bootstrap grid for timeblocks
let bgColorClass = "past";
for (let i=0; i<hourArray.length; i++) {
    if (i === currentHour) {
        bgColorClass = "present";
    } else if (i >= currentHour) {
        bgColorClass = "future";
    }
    let hourText = moment().hour(i).format("hA"); // set hour in 12-hour AM/PM format

    // create div for Hour column
    let rowDiv = $('<div>');
    rowDiv.addClass('row border-top border-secondary');
    let hourColDiv = $('<div>');
    hourColDiv.addClass('col-2 border-right');
    hourColDiv.text(hourText);
    rowDiv.append(hourColDiv);

    // create div for Event column
    let eventDiv = $('<div>');
    eventDiv.addClass('col-9 border-right align-top '+bgColorClass);
    rowDiv.append(eventDiv);

    //create div for Save button column
    let saveDiv = $('<div>');
    saveDiv.addClass('col-1');
    rowDiv.append(saveDiv);

    formEl.append(rowDiv);

}