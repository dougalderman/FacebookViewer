angular.module('myApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('login', {
        url: '/login',
        templateUrl: './templates/login.html'
    })
    .state('Home', {
        url: '/home',
        templateUrl: './templates/home.html',
        controller: 'homeCtrl'
    })
    
    $urlRouterProvider.otherwise('/login');
})