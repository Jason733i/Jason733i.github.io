'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
        'ngRoute',
        'myApp.filters',
        'myApp.services',
        'myApp.directives',
        'myApp.controllers'
    ]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'HomeController'});
        $routeProvider.when('/blog', {templateUrl: 'partials/blog.html', controller: 'BlogController'});
        $routeProvider.when('/bio', {templateUrl: 'partials/bio.html', controller: 'BioController'});
        $routeProvider.otherwise({redirectTo: '/'});
    }]);