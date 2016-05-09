'use strict';

// App Module: the name AngularStore matches the ng-app attribute in the main <html> tag
// the route provides parses the URL and injects the appropriate partial page
var storeApp = angular.module('AngularStore', ['ngRoute']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/login', {
        templateUrl: 'login.view.html',
        controller: 'LoginController' 
      }).
      when('/home', {
        templateUrl: 'home.view.html',
        controller: 'HomeController' 
      })
      .otherwise({
        redirectTo: '/login'
      });
}]);