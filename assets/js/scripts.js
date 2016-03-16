//the code below is going to get the name of the appointment we need to get the json of when we click on that appointment

$(".apptThumbnail").on("click", function(){
  var clickedApptName = $(this).children().children().filter($(".apptTitle")).text();
  console.log("clickedApptName is " + clickedApptName);
  console.log(clickedApptName);

var ironyArdApp = angular.module('ironyArdApp', ['ngRoute']);

ironyArdApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'partials/index.html',
                controller  : 'indexCtrl'
            })

            // route for the about page
            .when('/apptDetail', {
                templateUrl : 'partials/appointmentDetail.html',
                controller  : 'apptDetailsCtrl'
            })

            // route for the contact page
            .when('/editAppt', {
                templateUrl : 'pages/editAppointment.html',
                controller  : 'editApptCtrl'
            });

            .when('/newAppt', {
                templateUrl : 'pages/newAppointment.html',
                controller  : 'newApptCtrl'
            });
    });


ironyArdApp.controller('MainCtrl', function($scope){
    $scope.thing = "hello! Are you there?";
});

ironyArdApp.controller('indexCtrl', function($scope){
    $scope.thing = "hello! Are you there?";
});

ironyArdApp.controller('apptDetailsCtrl', function($scope){
    $scope.thing = "hello! Are you there?";
});

ironyArdApp.controller('editApptCtrl', function($scope){
    $scope.thing = "hello! Are you there?";
});

ironyArdApp.controller('newApptCtrl', function($scope){
    $scope.thing = "hello! Are you there?";
});

// looking for <div class="apptTitle">Meet w/Ash</div>pt(".Apptname")

});

// var clickedApptName = $(this).children().filter(".appt(".Apptname")
//
// for (i)
//
//  if (superObject[i].name === clickedApptName) {
//      JSON.parse(localStorage.getItem(superObject[i].name));
//         // set a new item
//
//         //get it on the appointment detail page
//  }
