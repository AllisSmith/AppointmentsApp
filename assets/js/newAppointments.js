// this is the javascript for the New Appointments page

// declare a bunch of variables to house the appointment details
var appTitle = document.querySelector("#title");
var appStreet = document.querySelector("#street");
var appCityState = document.querySelector("#city-state");
var appDate = document.querySelector("#date");
var appTime = document.querySelector("#time");
var appNotes = document.querySelector("#notes");

// when the 'save' button is clicked...
$(".save").on("click", function() {

// apptCreated will be a unique timestamp value that we will append within the object
var apptCreated = new Date();
apptCreated = apptCreated.getTime();

// Create an object for the new appointment
var newAppt = {};
newAppt.title = appTitle.value;
newAppt.street = appStreet.value;
newAppt.cityState = appCityState.value;
newAppt.date = appDate.value;
newAppt.time = appTime.value;
newAppt.notes = appNotes.value;
newAppt.apptId = apptCreated;

//add the newAppt object to localStorage
localStorage.setItem( apptCreated , JSON.stringify(newAppt) );

// var apptList = ( JSON.parse( localStorage.getItem( "appt" ) ) );
// console.log(apptList);

// superObject.push(newAppt);

// show the graphic modal after new appointment has been created
$(".save-modal").addClass("showing")

});

$(".delete").on("click", function() {

  $(".delete").addClass("showing")

});


// when the modal is clicked upon, hide it again
// $(".modal-ok").on("click", function(){
//   $(".save-modal").removeClass("showing")
// })

//when the modal is clicked, the user will be redirected to index.html
