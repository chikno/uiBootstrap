'use strict';

describe('Controller: DropDownCtrl', function () {
  // load the controller's module
  beforeEach(module('yeaomanApp'));
  //load the boostrap module
  beforeEach(module('ui.bootstrap'));

  var DropDownCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DropDownCtrl = $controller('DropDownCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DropDownCtrl.awesomeThings.length).toBe(4);
  });
});
