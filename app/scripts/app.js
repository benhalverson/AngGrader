'use strict';

/**
 * @ngdoc overview
 * @name angGraderApp
 * @An app that keeps track of students grades
 * # angGraderApp
 *
 * Main module of the application.
 */
angular
  .module('angGraderApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'firebase'
  ])
  .constant('FIREBASE_URL', 'https://grader-app2.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/assignments.html',
        controller: 'AssignmentCtrl',
        controllerAs: 'assignments'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
