
var businessHours = [
  {
    "id": "hour-9",
    "label": "9AM",
    "hour": 9
  },
  {
    "id": "hour-10",
    "label": "10AM",
    "hour": 10
  },
  {
    "id": "hour-11",
    "label": "11AM",
    "hour": 11
  },
  {
    "id": "hour-12",
    "label": "12PM",
    "hour": 12
  },
  {
    "id": "hour-13",
    "label": "1PM",
    "hour": 13
  },
  {
    "id": "hour-14",
    "label": "2PM",
    "hour": 14
  },
  {
    "id": "hour-15",
    "label": "3PM",
    "hour": 15
  },
  {
    "id": "hour-16",
    "label": "4PM",
    "hour": 16
  },
  {
    "id": "hour-17",
    "label": "5PM",
    "hour": 17
  },
];


/*
 * A function to render all business hours.
 * The style of each hour is initially unset.
 */
function renderBusinessHours() {
  var schedulerBdy = $('#scheduler');
  for (var i = 0; i < businessHours.length; i++)
  {
    var hourDiv = $("<div id=\"" + businessHours[i].id + "\" class=\"row time-block\">")
    hourDiv.append($("<div class=\"col-2 col-md-1 hour text-center py-3\">" + businessHours[i].label + "</div>"));
    hourDiv.append($("<textarea class=\"col-8 col-md-10 description\" rows=\"3\"> </textarea>"));
    hourDiv.append($("<button class=\"btn saveBtn col-2 col-md-1\" aria-label=\"save\"><i class=\"fas fa-save\" aria-hidden=\"true\"></i></button>"));
    schedulerBdy.append(hourDiv);
  }
}

function styleBusinessHours(hour) {

  for (var i = 0; i < businessHours.length; i++) {
    var hourEl = $("#" + businessHours[i].id);
    console.log(hourEl);
    if (businessHours[i].hour < hour)
    {
      hourEl.addClass('past');
    } else if (businessHours[i].hour == hour)
    {
      hourEl.addClass('present');
    } else {
      hourEl.addClass('future');
    }
  }
}

$(function () {

  var currentHour = dayjs().format('H');

  renderBusinessHours();

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  styleBusinessHours(currentHour);

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


});
