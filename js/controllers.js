'use strict';

/* Controllers */
angular.module('myApp.controllers', []).
    controller('SiteController', ['$scope', function($scope) {

    }]).
    controller('HomeController', [function() {

    }]).
    controller('BlogController', ['$scope', '$routeParams', 'BlogPostService', function($scope, $routeParams, BlogPostService) {
        $scope.blogPosts = BlogPostService.all();
        $scope.blogPostUrl = '/posts/' + ($routeParams['id'] || 'intro-post') + '.html';
    }]).
    controller('SubBlogController', ['$scope', '$routeParams', 'BlogPostService', function($scope, $routeParams, BlogPostService) {
        $scope.blogPosts = BlogPostService.all();
        $scope.blogPostUrl = '/posts/' + $routeParams['id'] + '/' + $routeParams['subId'] + '.html';
    }]).
    controller('ProjectsController', ['$scope', '$routeParams', 'ProjectService', function($scope, $routeParams, ProjectService) {
        $scope.projects = ProjectService.all();
        $scope.projectUrl = '/projects/' + ($routeParams['id'] || 'hay-okay') + '.html';
    }]);