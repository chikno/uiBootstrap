'use strict';

/**
 * @ngdoc function
 * @name yeaomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeaomanApp
 */
angular.module('yeaomanApp')
  .controller('DropDownCtrl', function ($scope) {

  	  $scope.items = [
		    'The first choice!',
		    'And another choice for you.',
		    'but wait! A third!'
		];

  });
