'use strict';

/**
 * @ngdoc function
 * @name catenaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the catenaApp
 */
angular.module('catenaApp')
    .factory('Keys', ['$resource', function($resource){
        var host = 'https://192.168.0.111';
        var urlApi = '/keys';
        urlApi = host + urlApi;
        var resource = $resource(urlApi, {}, {'get': { method: 'GET', isArray: true }}  );
        return resource;
    }])
    .factory('Toggle', ['$resource', function($resource){
        var host = 'https://192.168.0.111';
        var urlApi = '/keys';
        urlApi = host + urlApi;
        var resource = $resource(urlApi, {}, {'get': { method: 'GET', isArray: true }}  );
        return resource;
    }])
  .controller('DeviceCtrl', function ($scope, Keys, Toggle) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.hello = 'yeia';
    console.log('helloooo');

    var host = "http://192.168.0.111";
    var route = "/keys";
    Keys.get(function(results){
        var key = results[0];
        results.push(angular.copy(key));
        results.push(angular.copy(key));
        results.push(angular.copy(key));
        results.push(angular.copy(key));
        results.push(angular.copy(key));
        results.push(angular.copy(key));
        $scope.keys = results;
        
    });

    $scope.toggleAllow = function(key){
        if(key.status){
            key.status = 0;
        }else{
            key.status = 1;
        }
        Toggle.get({status:key.status}, function(res){
            
        
        });
        
        
    };  
  })
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

