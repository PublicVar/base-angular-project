
(function () {

    angular.module('project').factory("users", ['$http', '$q', function ($http, $q) {
            var factory = {
                users: null,
                currentUser: null,
                getAppUsers: function () {
                    var deferred = $q.defer();
                    $http.get('/user/list/all')
                            .success(function (data, status) {
                                factory.users = data;
                                deferred.resolve(factory.users);
                            }).error(function (data, status) {
                        deferred.reject('Impossible de récupérer les utilsateurs');
                    });
                    return deferred.promise;
                }
            }

            return factory;
        }]);


})();