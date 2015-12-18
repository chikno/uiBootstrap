'use strict';

/**
 * @ngdoc function
 * @name yeaomanApp.controller:AlertCtrl
 * @description
 * # AlertCtrl
 * Controller of the yeaomanApp
 */
angular.module('yeaomanApp')
  .controller('AlertCtrl', function ($scope) {

  	  $scope.alerts = [
    		{ type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
   		    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
 	  ];

 	  $scope.addAlert = function() {

 	  		$scope.alerts.push({
 	  			msg : 'another ALert'
 	  		});
 	  };

 	  $scope.closeAlert = function(index) {

 	  		$scope.alerts.splice(index, 1);
 	  };

  });
