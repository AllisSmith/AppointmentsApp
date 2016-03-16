$( document ).ready(function() {

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

// Create an object for the new appointment and add details from field inputs
var newAppt = {};
newAppt.title = appTitle.value;
newAppt.street = appStreet.value;
newAppt.cityState = appCityState.value;
newAppt.date = appDate.value;
newAppt.time = appTime.value;
newAppt.notes = appNotes.value;
newAppt.apptId = apptCreated;

// The function below was fetched from http://stackoverflow.com/questions/20936466/cannot-push-objects-in-array-in-localstorage and modified

function SaveDataToLocalStorage(newAppointment) {
    var apptMasterList;
    //is there already a thing with key 'session' in localstorage?
    if (localStorage.getItem('session') === null) {// if so
        apptMasterList = [];//set our list of existing appointments to an empty array
        console.log("session was null");
    } else {
         // Parse the serialized data back into an array of objects
         apptMasterList = JSON.parse(localStorage.getItem('session'));
     }
     // Push the new appointment (the function's parameter) onto the array
     apptMasterList.push(newAppointment);
     // Alert the array value
    //  alert(apptMasterList);  // Should be something like [Object array]
     // Re-serialize the array back into a string and store it in localStorage
     localStorage.setItem('session', JSON.stringify(apptMasterList));

     console.log("the current list of appointments looks like this:" );
     console.log(apptMasterList);
}

console.log("the appointment you just created looks like this:" );
console.log(newAppt);
SaveDataToLocalStorage(newAppt);//call the function and do the things is does





// superObject.push(newAppt);

// show the graphic modal after new appointment has been created
$(".save-modal").addClass("showing")

});

$(".delete").on("click", function() {

  $(".delete").addClass("showing")

});


});
