// var car = {};
// car.wheels = 4;
// car.doors = 2;
// car.sound = 'vroom';
// car.name = 'Lightning McQueen';
// console.log( car.wheels );
// localStorage.setItem( 'car', JSON.stringify(car) );
// var theCar = ( JSON.parse( localStorage.getItem( 'car' ) ) );
// console.log(theCar.doors);
//
//
// var fName = document.querySelector("#firstname");
// var lName = document.querySelector("#lastname");
// var email = document.querySelector("#email");
// var country = document.querySelector("#country");
// var biography = document.querySelector("#biography");
//


// var appTitle = $("#title");

var appTitle = document.querySelector("#title");
var appStreet = document.querySelector("#street");
var appCityState = document.querySelector("#city-state");
var appDate = document.querySelector("#date");
var appTime = document.querySelector("#time");
var appNotes = document.querySelector("#notes");


$(".save").on("click", function() {

  // console.log(appTitle.value);


var appointment1 = {};
appointment1.title = appTitle.value;
appointment1.street = appStreet.value;
appointment1.cityState = appCityState.value;
appointment1.date = appDate.value;
appointment1.time = appTime.value;
appointment1.notes = appNotes.value;

// console.log("hello" + appointment1.title);

localStorage.setItem( 'appointment1', JSON.stringify(appointment1) );
var apptList = ( JSON.parse( localStorage.getItem( 'appointment1' ) ) );
console.log(apptList);
// appointment1.value = "";

$(".save-modal").addClass("showing")

});

$(".modal-ok").on("click", function(){
  $(".save-modal").removeClass("showing")
})


//
//
// localStorage.setItem( 'car', JSON.stringify(car) );
// var theCar = ( JSON.parse( localStorage.getItem( 'car' ) ) );
// console.log(theCar.doors);
