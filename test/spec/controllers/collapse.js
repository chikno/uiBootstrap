'use strict';

describe('Controller: CollapseCtrl', function () {

  // load the controller's module
  beforeEach(module('yeaomanApp'));

  var CollapseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CollapseCtrl = $controller('CollapseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should test click collapse', function () {
      expect(typeof scope.isCollapsed).toBe('boolean');
  });
});
