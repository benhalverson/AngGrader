'use strict';

/**
* @ngdoc function
* @name angGraderApp.controller:AddstudentCtrl
* @adding a student to the database
* # AddstudentCtrl
* Controller of the angGraderApp
*/
angular.module('angGraderApp')
.controller('AddstudentCtrl', function ($scope, $rootScope, students) {
  console.log('add student controller');
  $rootScope.studentArr = [];

  $scope.addStudent = function(student){
    console.log('inside addStudent - before push');
    $rootScope.studentArr.push(student);
    console.log('inside addStudent - after push');
    console.log('student', student);
    students.add(student);
  };

  // $scope.student = [
  //   {name: 'Ben', cohort: 'June 2014'},
  //   {name: 'Christian', cohort: 'April 2015'}
  // ];

  // $scope.addStudent = function(student) {
  //   console.log('adding a new student', student);
  //   $scope.student.push(student);
  // };
});
