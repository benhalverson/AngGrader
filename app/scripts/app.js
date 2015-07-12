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
  .constant('FIREBASE_URL', 'https://grader-app.firebaseio.com')
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/assignments.html',
        controller: 'AssignmentCtrl',
        controllerAs: 'assignments'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl',
        controllerAs: 'register'
      //   resolve: {
      //     user: function(Auth) {
      //       return Auth.resolveUser();
      //     }
      //   }
      })
      .otherwise({
        redirectTo: '/'
      });
      // use the HTML5 History API
      $locationProvider.html5Mode({
      enabled:true,
      requireBase: false});
  });
