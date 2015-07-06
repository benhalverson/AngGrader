'use strict';
angular
  .module('angGraderApp')
  .controller('AssignmentCtrl', function($scope, Assignment) {
    $scope.posts = Assignment.all;

    // $scope.post = {url: 'http://', 'title': ''};

    $scope.submitPost = function() {
      Assignment.create($scope.post).then(function() {
        // $scope.post = {url: 'http://', 'title': ''};
      });
    };

    $scope.deletePost = function(post) {
      Assignment.delete(post);
    };
  });
