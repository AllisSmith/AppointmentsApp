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


var appTitle = $("#title");

$(".save").on("click", function() {

  console.log(appTitle.value);

console.log("hello");
console.log($(appTitle).value);

var appointment1 = {};
appointment1.title = appTitle.value;
console.log(appointment1);
localStorage.setItem( 'appointment1', JSON.stringify(appointment1) );
var theCar = ( JSON.parse( localStorage.getItem( 'appointment1' ) ) );
console.log(theCar);
// appointment1.value = "";

});

//
//
// localStorage.setItem( 'car', JSON.stringify(car) );
// var theCar = ( JSON.parse( localStorage.getItem( 'car' ) ) );
// console.log(theCar.doors);
