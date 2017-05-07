angular.module('app', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.when('', '/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '',
                controller: ''
            })
            



        $urlRouterProvider.otherwise('/');
    })