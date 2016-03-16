;(function(){

var ironyArdApp = angular.module('ironyArdApp', ['ngRoute']);

ironyArdApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
              templateUrl : 'index.html'
              // templateUrl : 'partials/index.html',
              // controller  : 'indexCtrl'
            })

            // route for the about page
            .when('/apptDetail', {
              templateUrl : 'appointmentDetail.html'
                // templateUrl : 'partials/appointmentDetail.html',
                // controller  : 'apptDetailsCtrl'
            })

            // route for the contact page
            .when('/editAppt', {
              templateUrl : 'editAppointment.html'
                // templateUrl : 'pages/editAppointment.html',
                // controller  : 'editApptCtrl'
            })

            .when('/newAppt', {
              templateUrl : 'newAppointment.html'
                // templateUrl : 'pages/newAppointment.html',
                // controller  : 'newApptCtrl'
            });
    });


// ironyArdApp.controller('MainCtrl', function($scope){
//     $scope.thing = "hello! Are you there?";
// });

ironyArdApp.controller('indexCtrl', function($scope){
    $scope.thing = "Index! Are you there?";
});

ironyArdApp.controller('apptDetailsCtrl', function($scope){
    $scope.thing = "Appointment Details! Are you there?";
});

ironyArdApp.controller('editApptCtrl', function($scope){
    $scope.thing = "Edit Appointment! Are you there?";
});

ironyArdApp.controller('newApptCtrl', function($scope){
    $scope.thing = "New Appointment! Are you there?";
});

};

})();
