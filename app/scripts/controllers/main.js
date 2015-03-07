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

  	// initial google map settings
    $scope.map = { center: { latitude: 49, longitude: -78 }, zoom: 8 };

    // console.log($scope.map);
    $scope.search = 'bushwick';

    var geocoder = new google.maps.Geocoder();
    $scope.$watch('search',function(oldValue,newValue){
    	// console.log($scope.search);
    
	    geocoder.geocode( { 'address': $scope.search}, function(results, status) {

		    if (status == google.maps.GeocoderStatus.OK) {
		    	$scope.map.center.latitude = results[0].geometry.location.lat();
		    	$scope.map.center.longitude = results[0].geometry.location.lng();
		    	
		    	console.log(results[0].geometry.location.lat(),results[0].geometry.location.lng());

		    } else {
		      // alert('Geocode was not successful for the following reason: ' + status);
		    }
		  });
    });
    // initalie map after
    uiGmapGoogleMapApi.then(function(maps) {

    });

  });
