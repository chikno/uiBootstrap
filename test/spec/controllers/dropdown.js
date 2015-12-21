'use strict';

describe('Controller: DropDownCtrl', function () {
  // load the controller's module
  beforeEach(module('yeaomanApp'));
  //load the boostrap module
  beforeEach(module('ui.bootstrap'));

  var DropDownCtrl,
    scope;

   var element = angular.element(

          '<span uib-dropdown="" on-toggle="toggled(open)" class="dropdown" style="">'+
      '<a href="" id="simple-dropdown" uib-dropdown-toggle="" class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">'+
        'Click me for a dropdown, yo!'+
     ' </a>'+
  '    <ul class="uib-dropdown-menu dropdown-menu" aria-labelledby="simple-dropdown">' +
     '   <li ng-repeat="choice in items" class="ng-scope">' +
     '     <a href="" class="ng-binding">The first choice!</a>' +
   '     </li><li ng-repeat="choice in items" class="ng-scope">' +
       '   <a href="" class="ng-binding">And another choice for you.</a>' +
      '  </li><li ng-repeat="choice in items" class="ng-scope">' + 
          '<a href="" class="ng-binding">but wait! A third!</a>' +
      '  </li>' +
     ' </ul>' +
  '  </span>');

       var link = element.find('span.dropdown');

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope , $compile) {
    scope = $rootScope.$new();



    DropDownCtrl = $controller('DropDownCtrl', {
      $scope: scope
      // place here mocked dependencies
    });

      $compile(element)(scope);
      scope.$digest();


  }));

  it('should  initialize the scope items to 3', function() {
    expect(scope.items.length).toBe(3);

  });


  it('should  hide the dropdown on page load', function() {

    expect(link).not.toHaveClass('open');
      
  });

});
