'use strict';

/**
 * @ngdoc function
 * @name featureToggleServiceappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the featureToggleServiceappApp
 */
angular.module('featureToggleServiceappApp')
  .controller('MainCtrl', function ($resource, $scope, FeatureToggles) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    var FeatureToggle = $resource('http://localhost:9001/api/Admin/:featureId',
		 {featureId:'@id'});


	var features = FeatureToggle.query(function() {
	});

	$scope.features = features;

$scope.changed = function(feat)
{
	FeatureToggles.changeValue({ id:feat.Id, enable:feat.Enable }, feat);
}

  });
