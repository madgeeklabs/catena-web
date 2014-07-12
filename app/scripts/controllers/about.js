'use strict';

/**
 * @ngdoc function
 * @name catenaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the catenaApp
 */
angular.module('catenaApp')
  .controller('DeviceCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.hello = "yeia";
  });
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
