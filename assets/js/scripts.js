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

$(document).ready( function () {
  "use strict";

// get items from local storage


//this pulls in only the most recent appointment - currently, they all have key "appt"
//we need to find a way to sort through localstorage and check for the appointments in there
//and THEN determine the ones that I want to display
var appointments = JSON.parse(localStorage.getItem( "appt" ));
console.log(appointments);

// $.getJSON( appointments , function( json ) { //json for the contents under the toggling tabs

//the section below populates data from the appointment object retrieved from localStorage

  for (var i=0; i<apptMasterList.length; i++){ // I'll need to iterate through the list of appointments and display them

  $(".appts").append('<div class="apptThumbnail"><div class="apptId">'+apptMasterList[i].apptId+'</div><div class="appTimeWeather"><div class="appTime">'+apptMasterList[i].time+'</div><i id="weatherIcon" class="fa fa-cloud"></i></div><div class="apptTitleLoc"><div class="apptTitle">'+apptMasterList[i].title+'</div><div class="apptLoc">@'+apptMasterList[i].cityState+'</div></div></div>'
  );


  // $(".apptTitle").html(apptMasterList[i].title);
  // $(".street").html(apptList.street);
  // $(".apptLoc").html("@" + apptMasterList[i].cityState);
  // // $(".date").html(apptList.date);
  // $(".appTime").html(apptMasterList[i].time);
  // // $(".notes").html(apptList.notes);
  // $(".apptId").html(apptMasterList[i].apptId); //puts the unique id in the html

  }

// });


//the code below is going to get the name of the appointment we need to get the json of when we click on that appointment

  $(".apptThumbnail").on("click", function(){
    var clickedApptId = $(this).children().filter($(".apptId")).text();

    // save the clicked appointment's ID in localStorage
    localStorage.setItem('clickedAppt', clickedApptId);

    console.log("the appointment you clicked is .. ");
    console.log($(this));

    console.log("the appointment you clicked has Id " + clickedApptId);




  });

});
