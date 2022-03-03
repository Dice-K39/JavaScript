"use strict";

angular.module("myApp", []);
angular.module("myApp").controller("MainController", ["$scope", "$interval", function($scope, $interval)
{ 
    console.log("AngularJS v1.8.2 is running successfully.");
    $scope.message = "Hello to your new world, ";
    $scope.sayHello = function(name)
    {
        return $scope.message + ' ' + name + '.';
    }
    var items = ["bananas", "apples", "pears", "cherries", "peaches"];

    $scope.itemIndex = null;
    $scope.currentItem = '';

    $scope.getItem = function()
    {
        $scope.currentItem = items[$scope.itemIndex];
    }

    $interval(function()
    {
        $scope.itemIndex = Math.round(Math.random() * (items.length - 1));
        $scope.getItem();
    }, 2000);
}]);