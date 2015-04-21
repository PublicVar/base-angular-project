(function () {

    var projectApp = angular.module('project', ['ngRoute','smart-table','angularSpinner','ngAnimate']);

    projectApp.config(['$httpProvider','$locationProvider', function ( $httpProvider,$locationProvider) {
            $locationProvider.id = 'fr-fr';

            //Detect if there is a loading pending. It uses for show or hide a loading
            $httpProvider.interceptors.push(function ($q, $rootScope) {
                if ($rootScope.activeCalls == 'undefined') {
                    $rootScope.activeCalls = 0;
                }

                return {
                    request: function (config) {
                        $rootScope.activeCalls += 1;
                        return config;
                    },
                    requestError: function (rejection) {
                        $rootScope.activeCalls -= 1;
                        return rejection;
                    },
                    response: function (response) {
                        $rootScope.activeCalls -= 1;
                        return response;
                    },
                    responseError: function (rejection) {
                        $rootScope.activeCalls -= 1;
                        return rejection;
                    }
                };
            });
            
        }]);
    
    //Event to use in the app
    projectApp.constant('CONSTANT_EVENTS',{
        FirstEvent:'FirstEvent',
        SecondEvent:'SecondEvent'
    });


})();