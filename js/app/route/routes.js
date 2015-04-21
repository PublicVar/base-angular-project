(function () {

    //Set all routes at the same place
    angular.module('project').constant('APP_ROUTES',{
        homepage: '/homepage'
    });
    
    angular.module('project').config(['$routeProvider','APP_ROUTES', function ($routeProvider, APP_ROUTES) {

        $routeProvider
                .when(APP_ROUTES.homepage, {
                    templateUrl:  'partials/homepage.html',
                    controller: 'DefaultController'
        })

    }]);

})();