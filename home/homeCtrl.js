angular.module('app').controller('homeCtrl', function ($scope, mainSvc) {

  $scope.test = mainSvc.test;

})