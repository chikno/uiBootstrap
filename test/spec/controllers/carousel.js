'use strict';

describe('Controller: CarouselCtrl', function () {

  // load the controller's module
  beforeEach(module('yeaomanApp'));

  var CarouselCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CarouselCtrl = $controller('CarouselCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

    it('should Initialize slides interval to 5000', function () {
     expect(scope.myInterval).toEqual(5000);
    });

    it('should add a slide to the slides Array' , function() {
      expect(scope.slides.length).toBe(3);
        scope.addSlide();
        expect(scope.slides.length).toBe(4);

    });

});
