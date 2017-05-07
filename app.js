angular.module('app', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.when('', '/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home/home.html',
                controller: 'homeCtrl'
            })
            



        $urlRouterProvider.otherwise('/');
    })