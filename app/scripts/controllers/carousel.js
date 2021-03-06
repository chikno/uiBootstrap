'use strict';

/**
 * @ngdoc function
 * @name yeaomanApp.controller:CarouselCtrl
 * @description
 * # CarouselCtrl
 * Controller of the yeaomanApp
 */
angular.module('yeaomanApp')
  .controller('CarouselCtrl', function ($scope) {
	  $scope.myInterval = 5000;
	  var slides = $scope.slides = [];


	  $scope.addSlide = function() {
	  	    var newWidth = 600 + slides.length + 1;
		    slides.push({
		      image: '//placekitten.com/' + newWidth + '/300',
		      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
		        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
		    });

	  };

	    for (var i=0; i<3; i++) {
   			 $scope.addSlide();
  		}
  });
