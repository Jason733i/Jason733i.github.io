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
                    },
                    {
                        'id': 'learning-ev3',
                        'title': 'Learning to Program Lego Mindstorms Ev3',
                        'subPosts': [
                            {
                                'subId': 'motor-control',
                                'title': 'Driving the motors'
                            },
                            {
                                'subId': 'sensory-input',
                                'title': 'Understanding Sensory Input'
                            },
                            {
                                'subId': 'loop-control',
                                'title': 'Loop Control'
                            },
                            {
                                'subId': 'bluetooth-communication',
                                'title': 'Bluetooth Communication'
                            }
                        ]
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