'use strict';

/* Controllers */
angular.module('myApp.controllers', []).
    controller('SiteController', function($scope) {
        $scope.welcome = "JasonBerry.io";
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