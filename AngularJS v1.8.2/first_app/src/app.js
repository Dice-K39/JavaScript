"use strict";

angular.module("myApp", []);
angular.module("myApp").controller("MainController", ["$scope", function($scope)
{
    console.log("AngularJS v1.8.2 is running successfully.");
    $scope.message = "Hello to your new world, ";
    $scope.sayHello = function(name)
    {
        return $scope.message + ' ' + name + '.';
    }
}]);