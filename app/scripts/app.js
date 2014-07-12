'use strict';

/**
 * @ngdoc overview
 * @name catenaApp
 * @description
 * # catenaApp
 *
 * Main module of the application.
 */
angular
  .module('catenaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/devices', {
        templateUrl: 'views/devices.html',
        controller: 'DeviceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
