'use strict';

describe('Controller: AuthCtrl', function () {

  // load the controller's module
  beforeEach(module('angGraderApp'));

  var AuthCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    AuthCtrl = $controller('AuthCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AuthCtrl.awesomeThings.length).toBe(3);
  });
});
