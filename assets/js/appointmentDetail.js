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

 //this is the code for the weatherUnderground API call

 $.ajax({
   url : "http://api.wunderground.com/api/cb4732b4c2fde8e1/geolookup/conditions/q/IA/Cedar_Rapids.json",
   dataType : "jsonp",
   success : function(parsed_json) {
   var location = parsed_json['location']['city'];
   var temp_f = parsed_json['current_observation']['temp_f'];
   }
   });


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

    var cityStateArray = apptMasterList[i].cityState.split(" ");//create an array containing the associated city and state from the appointment in question THIS CAN BE MORE THAN TWO ELEMENTS LONG

    var state = cityStateArray.pop(); //the state name (abbreviation) is the last element of cityStateArray - this is also taking the state out of cityStateArray

    //this doesn't quite work for cities with more than one name in them yet

    var city = cityStateArray[0].slice(0, -1); //chop the comma off the name of the city
    if (city.split().length > 1){ //if the city is made up of more than one word...
      city = city.split(' ').join('_');//replace the spaces with underscores
    } else {
      ; //do nothing
    }

    console.log(cityStateArray);
    console.log("City is " + city + " and state is " + state);

    //this is the code for the weatherUnderground API call

    var weatherForecast = $.ajax({
      url : 'http://api.wunderground.com/api/cb4732b4c2fde8e1/geolookup/conditions/q/'+state+'/'+city+'.json',
      dataType : "jsonp",
      success : function(parsed_json) {
      var location = parsed_json['location']['city'];
      var temp_f = parsed_json['current_observation']['temp_f'];
      }
      });

    console.log("weatherForecast is this:");
    console.log(weatherForecast);

    // $('.weatherDeets').html(weatherForecast)

  } else {
    console.log("this appointment exists, but it wasn't the one that was clicked");
    console.log(apptMasterList[i].apptId);
    console.log("and this is what it's being compared to");
    console.log(clickedApptID);
  }
}
