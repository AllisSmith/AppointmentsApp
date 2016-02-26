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

  // for (var i=0; i<5; i++){ // I'll need to iterate through the list of appointments and display them
  // $(".apptThumbnail").append('<li class="repoTitle"><span class="octicon octicon-repo"></span>'+json[i].name+'</li><li class="description">'+json[i].description+'</li>');
  $(".apptTitle").html(appointments.title);
  // $(".street").html(apptList.street);
  $(".apptLoc").html(appointments.cityState);
  // $(".date").html(apptList.date);
  $(".appTime").html(appointments.time);
  // $(".notes").html(apptList.notes);
  $(".apptId").html(appointments.apptId); //puts the unique id in the html

  // }

// });


//the code below is going to get the name of the appointment we need to get the json of when we click on that appointment

  $(".apptThumbnail").on("click", function(){
    var clickedApptId = $(this).children().filter($(".apptId")).text();

    console.log("the appointment you clicked is .. ");
    console.log($(this));

    console.log("the appointment you clicked has Id " + clickedApptId);




  });

});
