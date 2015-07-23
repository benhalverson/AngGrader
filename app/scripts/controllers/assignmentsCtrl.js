'use strict';
angular
.module('angGraderApp')
.controller('AssignmentCtrl', function($scope, Assignment, $rootScope, Students) {

  function init(){
    if(Students.all){
      $rootScope.studentArr = Students.all;
      $scope.posts = Assignment.all;
    } else {
      $rootScope.studentArr = [];
    }
    console.log('$rootScope.studentArr', $rootScope.studentArr);
  }
  init();

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
