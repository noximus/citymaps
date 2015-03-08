'use strict';

/**
 * @ngdoc function
 * @name devApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the devApp
 */
angular.module('devApp')
  .controller('MainCtrl', function ($scope,uiGmapGoogleMapApi,cityMaps) {
  	// initial google map settings
    $scope.map = { center: { latitude: 49, longitude: -78 }, zoom: 8 };
    $scope.search = 'pizza in bushwick';

    var geocoder = new google.maps.Geocoder();
    $scope.$watch('search',function(){
    
	    geocoder.geocode( { 'address': $scope.search}, function(results, status) {

		    if (status == google.maps.GeocoderStatus.OK) {
		    	$scope.map.center.latitude = results[0].geometry.location.lat();
		    	$scope.map.center.longitude = results[0].geometry.location.lng();
		    	$scope.cityMaps = cityMaps.get({ search_q: $scope.search }, function() {
					// console.log($scope.cityMaps);
					// place cityMaps into array and push to google maps markers
				});
		    } else {
		      // alert('Geocode was not successful for the following reason: ' + status);
		    }
		  });
    });
    // initalie map after
    uiGmapGoogleMapApi.then(function(maps) {

    });
  });
