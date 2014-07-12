'use strict';

/**
 * @ngdoc function
 * @name catenaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the catenaApp
 */
angular.module('catenaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
