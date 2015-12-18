'use strict';

/**
 * @ngdoc function
 * @name yeaomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeaomanApp
 */
angular.module('yeaomanApp')
  .controller('ButtonsCtrl', function ($scope) {

  	$scope.singleModel = 1;

  	$scope.radioModel = 'middle';

  	 $scope.checkModel = {
    	left: false,
    	middle: true, 
   		right: false
 	 };

 	 $scope.checkResults = [];

 	 $scope.$watchCollection('checkModel' , function() {
 	 	 $scope.checkResults = [];

 	 	 angular.forEach($scope.checkModel, function(key, value) {
 	 	 	if (value) {
        		$scope.checkResults.push(key);
      		}

 	 	 });

 	 });


  });
