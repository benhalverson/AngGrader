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
    // $scope.whichPost = {};
    // $scope.whichStudent = {};

    $scope.posts = Assignment.all;
    console.log('$scope.posts', $scope.posts[0]);

    $scope.gradeThis = function(grading){
      console.log('grading', grading);
      console.log('scope grading', $scope.grading);
      // console.log('whichPost', $scope.whichPost);
      // console.log('whichStudent', $scope.whichStudent);
    }
  });
