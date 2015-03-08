'use strict';

/**
 * @ngdoc service
 * @name devApp.cityMaps
 * @description
 * # cityMaps
 * Factory in the devApp.
 */
angular.module('devApp')
  .factory('cityMaps', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
