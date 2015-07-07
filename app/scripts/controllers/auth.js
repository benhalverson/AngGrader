'use strict';

/**
 * @ngdoc function
 * @name angGraderApp.controller:AuthCtrl
 * @Register a new user
 * # AuthCtrl
 * Controller of the angGraderApp
 */
angular.module('angGraderApp')
  .controller('AuthCtrl', function ($scope, $location, Auth, user) {
    console.log('AuthCtrl loaded');
    if(user){
      $location.path('/');
    }

    $scope.register = function() {
      Auth.register($scope.user).then(function() {
        return Auth.login($scope.user).then(function() {
          $location.path('/');
        });
      });
    };
  });
