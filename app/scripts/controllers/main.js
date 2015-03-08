'use strict';

/**
 * @ngdoc function
 * @name devApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the devApp
 */
angular.module('devApp')
  .controller('MainCtrl', function ($scope,uiGmapGoogleMapApi,cityMaps,$resource) {
  	// initial google map settings
    $scope.map = { center: { latitude: 49, longitude: -78 }, zoom: 4, markers: {
        latitude: '',
        longitude: '',
        title: ''
      },tempMarkers:{}};
    $scope.options = {scrollwheel: false};
    $scope.search = 'pizza in bushwick';

    var geocoder = new google.maps.Geocoder();
    $scope.$watch('search',function(){
    
	    geocoder.geocode( { 'address': $scope.search}, function(results, status) {

		    if (status == google.maps.GeocoderStatus.OK) {
		    	$scope.map.center.latitude = results[0].geometry.location.lat();
		    	$scope.map.center.longitude = results[0].geometry.location.lng();

		    	$scope.map.tempMarkers = cityMaps.get({ search_q: $scope.search, lat: $scope.map.center.latitude, lng: $scope.map.center.longitude }, function() {
					// console.log($scope.map.markers.items[1].name);
					// place cityMaps into array and push to google maps markers
					// addMarkerToMap();
					console.log($scope.map.tempMarkers);
				});
		    } else {
		      // alert('Geocode was not successful for the following reason: ' + status);
		    }
		  });
    });
    
	
    // initalie map after
    uiGmapGoogleMapApi.then(function(maps) {
    	$scope.mapping = maps
    	console.log("uiGmapGoogleMapApi",maps)
    });
    function addMarkerToMap() {
    	// console.log("addMarkerToMap",$scope.map.tempMarkers.items[1]);

    	for (var i = 0; i < $scope.map.tempMarkers.count; i++) {
	    	var myLatlng = new google.maps.LatLng($scope.map.tempMarkers.items[i].lat,$scope.map.tempMarkers.items[i].lng);
			// var marker = new google.maps.Marker({
			// 	position: myLatlng,
			// 	map: $scope.mapping
			// });
			// markers.push(marker);
		};
	}
  });
