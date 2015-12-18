'use strict';

/**
 * @ngdoc overview
 * @name yeaomanApp
 * @description
 * # yeaomanApp
 *
 * Main module of the application.
 */
angular
  .module('yeaomanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/dropdown', {
        templateUrl: 'views/dropdown.html',
        controller: 'DropDownCtrl',
        controllerAs: 'dropDown'
      })
      .when('/buttons', {
        templateUrl: 'views/buttons.html',
        controller: 'ButtonsCtrl',
        controllerAs: 'buttons'
      }) 
      .when('/alert', {
        templateUrl: 'views/alert.html',
        controller: 'AlertCtrl',
        controllerAs: 'alert'
      })
       .when('/carousel', {
        templateUrl: 'views/carousel.html',
        controller: 'CarouselCtrl',
        controllerAs: 'carousel'
      })
      .when('/collapse', {
        templateUrl: 'views/collapse.html',
        controller: 'CollapseCtrl',
        controllerAs: 'collapse'
      })
    .when('/datepicker', {
        templateUrl: 'views/datepicker.html',
        controller: 'DatepickerCtrl',
        controllerAs: 'datepicker'
      })
      .otherwise({
        redirectTo: '/dropdown'
      });
  });
