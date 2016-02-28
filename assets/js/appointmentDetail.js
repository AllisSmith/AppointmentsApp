// ------------------------------------------------------------------
// the stuff at the top here checks to see what the current master list of appointments looks like

var apptMasterList;
//is anything in localstorage?
if (localStorage.getItem('session') === null) {// if so
    apptMasterList = [];//set our list of existing appointments to an empty array
} else {
     // Parse the serialized data back into an array of objects
     apptMasterList = JSON.parse(localStorage.getItem('session'));
 }

 console.log("the current list of appointments looks like this:" );
 console.log(apptMasterList);

 // ------------------------------------------------------------------

//get the clicked app's ID from local storage
var clickedApptID = parseInt(localStorage.getItem('clickedAppt'), 10);
console.log("the appointment you clicked has this ID:" );
console.log(clickedApptID);

//pull in data from the clicked appointment for the details

for (var i=0; i<apptMasterList.length; i++){
  if (apptMasterList[i].apptId === clickedApptID){
    $(".title").html(apptMasterList[i].title);
    $(".date").html(apptMasterList[i].date + " at ");
    $(".time").html(apptMasterList[i].time);
    $(".street").html(apptMasterList[i].street);
    $(".city-state").html(apptMasterList[i].cityState);
    $(".notes").html(apptMasterList[i].notes);
  } else {
    console.log("this appointment exists, but it wasn't the one that was clicked");
    console.log(apptMasterList[i].apptId);
    console.log("and this is what it's being compared to");
    console.log(clickedApptID);
  }
}
