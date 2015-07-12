'use strict';
angular
  .module('angGraderApp')
  .controller('AssignmentCtrl', function($scope, Assignment) {
    $scope.posts = Assignment.all;

    $scope.submitPost = function() {
      Assignment.create($scope.post).then(function() {

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
