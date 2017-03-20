var AngMVC = angular.module('AngMVC', ['ngRoute']);

//Adding Controller LandingpageController
AngMVC.controller('LandingpageController', LandingPageController);
AngMVC.controller('LoginController', LoginController);

AngMVC.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);

//Setting Configuration (Routing)
var configFunction = function ($routeProvider, $httpProvider)
{
    $routeProvider.
        when('/routeOne', {
            templateUrl: 'routesDemo/one'
        })
        .when('/routeTwo/:donuts', {
            templateUrl: function (params) {
                return '/routesDemo/two?donuts=' + params.donuts;
            }
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three'
        })
        .when('/login', {
            templateUrl: '/Account/Login',
            controller: LoginController
        });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}

configFunction.$inject = ['$routeProvider', '$httpProvider'];

AngMVC.config(configFunction);