'use strict';

/**
 * @ngdoc function
 * @name devApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the devApp
 */
angular.module('devApp')
  .controller('MainCtrl', function ($scope,uiGmapGoogleMapApi) {
    $scope.map = { center: { latitude: 49, longitude: -73 }, zoom: 8 };
    $scope.updateLoc = function(latLoc,longLoc){
    	//manual update for now
    	

    	console.log($scope.map.center.latitude);
    }
    uiGmapGoogleMapApi.then(function(maps) {

    });

  });
