'use strict';

/**
 * @ngdoc overview
 * @name featureToggleServiceappApp
 * @description
 * # featureToggleServiceappApp
 *
 * Main module of the application.
 */
var app = angular
  .module('featureToggleServiceappApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.toggle',
    'agGrid'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  app.factory('FeatureToggles', ['$resource', function($resource) {
      return $resource('http://localhost:9001/api/Admin/:id/:enable', null,
          {
              'changeValue': { method:'PUT' }
          });
}]);
