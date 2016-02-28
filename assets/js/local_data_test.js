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


var apptList = ( JSON.parse( localStorage.getItem( 'appt' ) ) );
$(".title").html(apptList.title);
$(".street").html(apptList.street);
$(".city-state").html(apptList.cityState);
$(".date").html(apptList.date);
$(".time").html(apptList.time);
$(".notes").html(apptList.notes);
