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
    // create textarea element for inputing event
    let textareaEl = $('<textarea>');
    textareaEl.addClass('form-control bg-transparent');
    textareaEl.attr('rows', 3);
    textareaEl.attr('maxlength', 100);
    textareaEl.attr('data-hour', i);
    eventDiv.append(textareaEl);
    rowDiv.append(eventDiv);

    // create div for Save button column
    let saveDiv = $('<div>');
    saveDiv.addClass('col-1');
    // add a save button to the last column
    let saveBtn = $('<button>');
    saveBtn.addClass('btn btn-primary');
    saveBtn.attr('data-toggle', 'button');
    saveBtn.text('Save');
    saveDiv.append(saveBtn);
    rowDiv.append(saveDiv);

    formEl.append(rowDiv);

}