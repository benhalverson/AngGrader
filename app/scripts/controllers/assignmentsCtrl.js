'use strict';
angular
  .module('angGraderApp')
  .controller('AssignmentCtrl', function($scope, Assignment, $rootScope) {
    $scope.posts = Assignment.all;
    $rootScope.studentArr = [
      {name: 'Ben', cohort: 'June 2014', assignments: ['test']},
      {name: 'Christian', cohort: 'April 2015', assignments: ['test']}
    ];

    $scope.submitPost = function() {
      var thisPost = $scope.post;
      thisPost.total = thisPost.functionality + thisPost.readability + thisPost.style + thisPost.uiux + thisPost.deployment;
      Assignment.create(thisPost, $rootScope.studentArr)
      .then(function() {

      });
    };

    $scope.deletePost = function(postId) {
      console.log("delete me");
      Assignment.delete(postId);
    };

    $scope.total = function() {

      $scope.post = $total;
    };
  });
