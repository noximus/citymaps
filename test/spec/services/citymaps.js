'use strict';

describe('Service: cityMaps', function () {

  // load the service's module
  beforeEach(module('devApp'));

  // instantiate service
  var cityMaps;
  beforeEach(inject(function (_cityMaps_) {
    cityMaps = _cityMaps_;
  }));

  it('should do something', function () {
    expect(!!cityMaps).toBe(true);
  });

});
