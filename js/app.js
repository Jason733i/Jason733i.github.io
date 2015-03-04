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
        $routeProvider.when('/posts/:id?', {templateUrl: 'partials/blog.html', controller: 'BlogController'});
        $routeProvider.when('/posts/:id/:subId', {templateUrl: 'partials/blog.html', controller: 'SubBlogController'});
        $routeProvider.when('/projects/:id?', {templateUrl: 'partials/projects.html', controller: 'ProjectsController'});
        $routeProvider.otherwise({redirectTo: '/'});
    }]).
    run(['$rootScope', '$location', function($rootScope, $location) {
        $rootScope.currentYear = (new Date()).getFullYear();
        $rootScope.welcome = "JasonBerry.io";

        $rootScope.active = function(path) {
            if ($location.path() == path) {
                return "active"
            } else {
                return ""
            }
        }
    }]);