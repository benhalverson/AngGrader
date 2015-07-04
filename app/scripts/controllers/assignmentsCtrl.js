'use strict';
angular
  .module('angGraderApp')
  .controller('AssignmentCtrl', function($scope, Assignment) {
    $scope.posts = [];
    // $scope.post = {url: 'http://', title: ''};

    $scope.submitPost = function() {
      Assignment.save($scope.post);
      // $scope.post = {url: 'http://', title: ''};
    };

    $scope.deletePost = function(postId) {
      Assignment.delete({id: postId}, function() {
        delete $scope.posts[postId];
      });
    };
  });
