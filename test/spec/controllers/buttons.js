'use strict';

describe('Controller: ButtonsCtrl', function () {

  // load the controller's module
  beforeEach(module('yeaomanApp'));
  beforeEach(module('ui.bootstrap'));

  var ButtonsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ButtonsCtrl = $controller('ButtonsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should return 1', function () {
    expect(scope.singleModel).toEqual(1);
  });
    it('should initlaize checkmodel to middle ', function () {
       expect(scope.checkModel.middle).toBe(true);
       expect(scope.checkModel.left).toBe(false);
       expect(scope.checkModel.right).toBe(false);
  });


    it('should initialize radio model to middle' , function() {

        expect(scope.radioModel).toEqual('middle');
    });


});
