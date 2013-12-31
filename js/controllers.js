'use strict';

/* Controllers */
angular.module('myApp.controllers', []).
    controller('SiteController', function($scope) {
        $scope.welcome = "Welcome to My Website!";
        $scope.currentYear = (new Date()).getFullYear();
    }).
    controller('HomeController', function() {

    }).
    controller('BlogController', function() {

    }).
    controller('BioController', function() {

    }).
    controller('ProjectsController', function() {

    });