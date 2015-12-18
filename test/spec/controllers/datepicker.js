'use strict';

describe('Controller: DatepickerCtrl', function () {

  // load the controller's module
  beforeEach(module('yeaomanApp'));

  var DatepickerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DatepickerCtrl = $controller('DatepickerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));


});
