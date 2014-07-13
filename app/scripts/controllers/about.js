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
    .factory('Devices', ['$resource', function($resource){
        var host = 'http://www.madgeeklabs.com:3000';
        var urlApi = '/devices';
        urlApi = host + urlApi;
        var resource = $resource(urlApi, {}, {'get': { method: 'GET', isArray: true }}  );
        return resource;
    }])
    .factory('Device', ['$resource', function($resource){
        var host = 'http://www.madgeeklabs.com:3000';
        var urlApi = '/devices/:id';
        urlApi = host + urlApi;
        var resource = $resource(urlApi, {id: '@id'}, {}  );
        return resource;
    }])
    .factory('DeviceRasp', ['$resource', function($resource){
        var host = 'https://192.168.0.111';
        var urlApi = '/admin';
        urlApi = host + urlApi;
        var resource = $resource(urlApi, {}, {}  );
        return resource;
    }])
    .factory('SettingsDevice', ['$resource', function($resource){
        var resource = $resource(urlApi, {}, {'get': { method: 'GET' }}  );
        //TODO ?
        return resource;
    }])
    .factory('Stats', ['$resource', function($resource){
        var host = 'https://192.168.0.111';
        var urlApi = '/stats';
        urlApi = host + urlApi;
        var resource = $resource(urlApi, {}, {'get': { method: 'GET' }}  );
        return resource;
    }])
    .factory('Toggle', ['$resource', function($resource){
        var host = 'https://192.168.0.111';
        var urlApi = '/keys/:userId';
        urlApi = host + urlApi;
        var resource = $resource(urlApi, {}, {'get': { method: 'GET' }}  );
        return resource;
    }])
  .controller('StatsCtrl', function ($scope, Stats) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.hello = 'yeia';
    console.log('helloooo');
        Stats.get({}, function(resp){
            $scope.money = resp.money;
        });
    })
  .controller('SettingsCtrl', function ($scope, Device, DeviceRasp) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.hello = 'yeia';
    console.log('helloooo');
    
    Device.get({id:1}, function(resp){
        $scope.phone = resp.phone;
        $scope.email = resp.email;
        $scope.sendSMS = resp.sendSMS;
        $scope.sendEmail = resp.sendEmail;
        $scope.price = resp.price;
        $scope.name = resp.name;
        $scope.id = resp.id;
        $scope.url = resp.url;
        $scope.image = resp.image;
    });
    $scope.save = function(){
        Device.save({id: $scope.id, 
        name: $scope.name,
        email: $scope.email,
        image: $scope.image,
        phone: $scope.phone,
        price: $scope.price,
        sendEmail: $scope.sendEmail,
        sendSMS: $scope.sendSMS,
        url: $scope.url,
        }, function(resp){
            console.log('after save');
            console.log(resp);
             
        });
        DeviceRasp.save({
            phone: $scope.sendSMS?$scope.phone:'',
            email: $scope.sendEmail?$scope.email:'',
        },function(){});
    
    };

  })
  .controller('UsersCtrl', function ($scope, Keys, Toggle) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.hello = 'yeia';
    console.log('helloooo');

    Keys.get(function(results){
        $scope.keys = results;
    });

    $scope.toggleAllow = function(key){
        if(key.status){
            key.status = 0;
        }else{
            key.status = 1;
        }
        Toggle.get({userId:key.user, status:key.status}, function(res){
            
        
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

