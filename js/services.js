'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
    factory('BlogPostService', [function() {
        return {
            all: function() {
                return [
                    {
                        'id': 'intro-post',
                        'title': 'The Beginning of a Journey'
                    }
                ]
            }
        }
    }]).
    factory('ProjectService', [function() {
        return {
            all: function() {
                return [
                    {
                        'id': 'hay-okay',
                        'title': 'HayOkay.com'
                    }
                ]
            }
        }
    }]).
    value('version', '0.1');