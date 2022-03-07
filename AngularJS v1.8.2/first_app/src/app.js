"use strict";

angular.module("myApp", []);
angular.module("myApp").controller("MainController", ["$scope", "$interval", function($scope, $interval)
{
    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Setting Up the AngularJS Environment
    console.log("AngularJS v1.8.2 is running successfully.");
    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Using Scope Functions
    $scope.message = "Hello to your new world, ";
    $scope.sayHello = function(name)
    {
        return $scope.message + ' ' + name + '.';
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Executing Scope Methods
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
    /////////////////////////////////////////////////////////////////////////////////////////////////
    // Working with Bracketed Expressions
    $scope.randomValue = -999;
    $scope.names = ["David", "Tom", "Joe"];
    $scope.qty = 20;
    $scope.cost = 1.99;
    $scope.pWidth = 100;

    $interval(function()
    {
        $scope.randomValue = Math.round(Math.random() * 1000000);
    }, 2000);
}]);
/////////////////////////////////////////////////////////////////////////////////////////////////
// Examining Dot Notation
angular.module("myApp").controller("ParentController", ["$scope", function($scope)
{
    $scope.model =
    {
        name: "John Smith"
    }

    $scope.name = "John Smith";
}]);

angular.module("myApp").controller("ChildController", ["$scope", function($scope)
{

}]);