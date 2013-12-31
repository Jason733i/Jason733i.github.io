'use strict';

/* Controllers */
angular.module('myApp.controllers', []).
    controller('SiteController', function($scope) {
        $scope.welcome = "Welcome to My Website!";
        $scope.currentYear = function() {
            Date.getYear();
        };
    }).
    controller('HomeController', function($scope) {

    }).
    controller('BlogController', function($scope) {

    }).
    controller('BioController', function($scope) {

    });