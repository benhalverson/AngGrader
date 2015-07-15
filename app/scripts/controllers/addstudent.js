'use strict';

/**
* @ngdoc function
* @name angGraderApp.controller:AddstudentCtrl
* @adding a student to the database
* # AddstudentCtrl
* Controller of the angGraderApp
*/
angular.module('angGraderApp')
.controller('AddstudentCtrl', function ($scope, $rootScope, Students) {
  console.log('$rootScope.studentArr', $rootScope.studentArr);

  $scope.addStudent = function(student){
    var s = {
      createdAt: Date(Date.now()),
      name: student.name,
      cohort: student.cohort,
      assignments: [{
        title: 'init',
        date: '',
        functionality: 0,
        readability: 0,
        style: 0,
        uiux: 0,
        deployment: 0,
        total: 0
      }]
    };


    // console.log('inside addStudent - before push', s);
    // $rootScope.studentArr.push(s);
    // console.log('inside addStudent - after push');
    console.log('student', s);
    Students.add(s);
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
