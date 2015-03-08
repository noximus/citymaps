'use strict';

/**
 * @ngdoc service
 * @name devApp.cityMaps
 * @description
 * # cityMaps
 * Factory in the devApp.
 */
angular.module('devApp')
  .factory('cityMaps', function ($resource) {
    return $resource('http://coresearch.citymaps.com/search/:search_q?lat=42.74&lon=-74.01&radius=20&zoom=15&businesses=1');
  });
