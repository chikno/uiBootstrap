'use strict';

describe('Controller: AlertCtrl', function () {

  // load the controller's module
  beforeEach(module('yeaomanApp'));

  var AlertCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AlertCtrl = $controller('AlertCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should count the array alerts length to be 2' , function() {
      expect(scope.alerts.length).toBe(2);
      scope.closeAlert();
      expect(scope.alerts.length).toBe(1);
      scope.alert = "test";
      scope.addAlert();
      expect(scope.alerts.length).toBe(2);


  });
});
