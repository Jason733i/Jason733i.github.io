'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
        'ngRoute',
        'myApp.filters',
        'myApp.services',
        'myApp.directives',
        'myApp.controllers'
    ]).
    config(function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'HomeController'});
        $routeProvider.when('/blog', {templateUrl: 'partials/blog.html', controller: 'BlogController'});
        $routeProvider.when('/projects', {templateUrl: 'partials/projects.html', controller: 'ProjectsController'});
        $routeProvider.otherwise({redirectTo: '/'});
    }).
    run(function($rootScope, $location) {
        $rootScope.currentYear = (new Date()).getFullYear();
        $rootScope.welcome = "JasonBerry.io";

        $rootScope.active = function(path) {
            if ($location.path() == path) {
                return "active"
            } else {
                return ""
            }
        }
    });