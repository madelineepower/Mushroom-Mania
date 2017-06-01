"use strict";
// app.run(function($rootScope, $location, FIREBASE_CONFIG) {
//   firebase.initializeApp(FIREBASE_CONFIG);
// });

var app = angular.module("MushroomApp", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.
  when('/all', {
    templateUrl: 'partials/hi.html',
    controller: "mushroomCtrl"
  }).
  when('/poison', {
    templateUrl: 'partials/poison.html',
    controller: "mushroomCtrl"
  }).
  when('/non-poison', {
    templateUrl: 'partials/non-poison.html',
    controller: "mushroomCtrl"
  }).
  otherwise('/');
});
