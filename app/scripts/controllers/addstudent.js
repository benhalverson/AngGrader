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
  console.log('$rootScope.studentArr', $rootScope.studentArr);
  // $rootScope.studentArr = [];

  $scope.addStudent = function(student){
    var s = {
      createdAt: Date(Date.now()),
      name: student.name,
      cohort: student.cohort,
      assignments: ['init']
    };


    console.log('inside addStudent - before push');
    $rootScope.studentArr.push(s);
    console.log('inside addStudent - after push');
    console.log('student', s);
    students.add(s);
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
