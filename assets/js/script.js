
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
 * A function to render all business hour elements.
 * The style of each element is initially unset.
 * One element for each hour from 9am to 5pm.
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
    localStorage.setItem(businessHours[i].id, '');
  }

  console.log("renderBusinessHours() executed");
}

/*
 * A function to style the business hour elements.
 * The style of each element is set based on the current hour of the day.
 * Past elements (hour < current hour of the day) - use 'past' style
 * Current element (hour == current hour of the day) - use 'present' style
 * Future elements (hour > current hour of the day) - use 'future' style
 */
function styleBusinessHours(hour) {

  for (var i = 0; i < businessHours.length; i++) {
    var hourEl = $("#" + businessHours[i].id);
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

  console.log("styleBusinessHours() executed");
}

$(function () {

  // Use Day.js to get the current hour of the day on 24-hr format
  var currentHour = dayjs().format('H');

  // Render the business hour elements. 
  renderBusinessHours();

  // Style the hour elements
  styleBusinessHours(currentHour);
  
  // An event lister for all save buttons
  // Creates a lister for all elements using the 'saveBtn' class
  $(".saveBtn").click(function() {
    var workEvent = $(this).siblings()[1].value;
    var hourId = $(this).parent().attr('id');

    localStorage.setItem(hourId, workEvent);
  });
  
  

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


});
