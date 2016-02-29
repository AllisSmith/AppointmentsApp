$(document).ready( function () {
  "use strict";

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
  if (apptMasterList[i].apptId === clickedApptID){ //if the clicked appointment matches an appointment's ID
    //
    $(".title").html(apptMasterList[i].title);//populate the data from that appointment
    $(".date").html(apptMasterList[i].date + " at ");
    $(".time").html(apptMasterList[i].time);
    $(".street").html(apptMasterList[i].street);
    $(".city-state").html(apptMasterList[i].cityState);
    $(".notes").html(apptMasterList[i].notes);

    //below is the code that molds the user-supplied city and state to fit the url for the API call

    var cityStateArray = apptMasterList[i].cityState.split(" ");//create an array containing the associated city and state from the appointment in question

    var state = cityStateArray.pop(); //the state name (abbreviation) is the last element of cityStateArray. pop it out - this is also taking the state out of cityStateArray, leaving only the city


    if (cityStateArray.length > 1){ //if the city is made up of more than one word...
      var city = cityStateArray.join('_');//replace the spaces with underscores
    } else {
      var city = cityStateArray[0];//turn the city into a string
    }
    // console.log(city);

    city = city.slice(0, -1);//chop the comma off of the end of the city name

    console.log(cityStateArray);
    console.log("City is " + city + " and state is " + state);

    //this is the code for the weatherUnderground API call

    $.ajax({
      dataType : "jsonp",
      url : 'http://api.wunderground.com/api/cb4732b4c2fde8e1/conditions/q/'+state+'/'+city+'.json'
    }).done(function (data) {

      // these variable declarations fail
      // var weatherIcon = data.estimated
      var weatherIcon = data['estimated']['icon_url'];
      console.log(weatherIcon);
      var tempC = data['estimated']['temp_c'];
      console.log(tempC);
      var conditions = data['estimated']['weather'];
      console.log(conditions);
    });

      // yeah, this doesn't work
      // $('#weatherIcon').append('<i id="weatherIcon" src="'+weatherIcon+'"></i>');
      // $('.weatherDeets').html(conditions + ", " + tempC + "°C");






      // $.getJSON( 'http://api.wunderground.com/api/cb4732b4c2fde8e1/conditions/q/'+state+'/'+city+'.json', function( json ) {
      //
      //   var weatherIcon = json.['estimated']['icon_url'];
      //   var tempC = json.['estimated']['temp_c'];
      //   var conditions = json.['estimated']['weather'];
      //
      //   console.log(weatherIcon);
      //   console.log(tempC);
      //   console.log(conditions);
      //
      //   $('#weatherIcon').append('<i id="weatherIcon" src="'+weatherIcon+'"></i>');
      //   $('.weatherDeets').html(conditions + ", " + tempC + "°C");
      //
      // });
        //  $(".octocatImage").append('<img src="'+json.avatar_url+'" alt="avatar"></img>');//these pull in various json key values for specific elements on the page
        //  $(".name").html(json.name);
        //  $(".username").html(json.login);
        //  $(".org").html(json.company);
        // //  $(".city").html(json.location);
        //  $(".emailAddress").append('<a href="mailto:'+json.email+'">'+json.email+'</a>');
        //  $(".blog").append('<a href='+json.html_url+'>'+json.html_url+'</a>');
        //  $(".dateJoined").html(time);
        //  $(".followers").html(json.followers);
        //  $(".starred").html(json.starred);
        //  $(".following").html(json.following);
      // });

      // $('#weatherIcon').append('<i id="weatherIcon" src="'+weatherIcon+'"></i>');
      // $('.weatherDeets').html(conditions + ", " + tempC + "°C");


      // $('#weatherIcon').html()
      // $('.weatherDeets')

    // console.log("weatherForecast is this:");
    // console.log(weatherForecast);



    // <div class="forecast">
    //   <i id="weatherIcon" class="fa fa-mixcloud fa-2x"></i>
    //   <div class="weatherDeets">Loud, 20°C</div>
    // </div>

    // $('.weatherDeets').html(weatherForecast)

  } else {
    // console.log("this appointment exists, but it wasn't the one that was clicked");
    // console.log(apptMasterList[i].apptId);
    // console.log("and this is what it's being compared to");
    // console.log(clickedApptID);
  }
}

});
