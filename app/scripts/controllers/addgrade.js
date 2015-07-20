'use strict';

/**
 * @ngdoc function
 * @name angGraderApp.controller:AddgradeCtrl
 * @description
 * # AddgradeCtrl
 * Controller of the angGraderApp
 */
angular.module('angGraderApp')
  .controller('AddgradeCtrl', function ($rootScope, $scope, Assignment) {
    console.log('inside the AddgradeCtrl');

    $scope.posts = Assignment.all;
    console.log('$scope.posts', $scope.posts[0]);

  });
