'use strict';

describe('Service: grupojovenSoporte', function () {

  // load the service's module
  beforeEach(module('conectadosApp'));

  // instantiate service
  var grupojovenSoporte;
  beforeEach(inject(function (_grupojovenSoporte_) {
    grupojovenSoporte = _grupojovenSoporte_;
  }));

  it('should do something', function () {
    expect(!!grupojovenSoporte).toBe(true);
  });

});
