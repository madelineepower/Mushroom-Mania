"use strict";

app.controller("mushroomCtrl", function($scope, mushroomFactory){
  console.log("hi controller");
  mushroomFactory.getShrooms()
  .then(function(itemCollection){
    $scope.mushrooms = itemCollection;
    console.log("here are the shrooms", $scope.mushrooms);
  });
});
