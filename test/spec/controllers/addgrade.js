'use strict';

describe('Controller: AddgradeCtrl', function () {

  // load the controller's module
  beforeEach(module('angGraderApp'));

  var AddgradeCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    AddgradeCtrl = $controller('AddgradeCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddgradeCtrl.awesomeThings.length).toBe(3);
  });
});
