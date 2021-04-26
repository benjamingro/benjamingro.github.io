var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller:'HomeCtrl as ctrl'
        })
        .when('/projects', {
            templateUrl: 'pages/projects.html'
        })
        .otherwise({ redirectTo: '/' });

}]);