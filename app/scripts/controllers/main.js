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
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    uiGmapGoogleMapApi.then(function(maps) {

    });
    
 //    var map;
	// function initialize() {
	// 	console.log("running");
	//   var mapOptions = {
	//     zoom: 8,
	//     center: new google.maps.LatLng(-34.397, 150.644)
	//   };
	//   map = new google.maps.Map(document.getElementById('map-canvas'),
	//       mapOptions);
	// }

	// google.maps.event.addDomListener(window, 'load', initialize);
  });
