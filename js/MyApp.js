var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller:'HomeCtrl as ctrl'
        })
        .when('/portfolio', {
            templateUrl: 'pages/portfolio.html'
        })
        .when('/capabilities', {
            templateUrl: 'pages/capabilities.html'
        })
        .otherwise({ redirectTo: '/' });

}]);