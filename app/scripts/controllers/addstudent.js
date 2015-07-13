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
  console.log('$rootScope.studentArr BEFORE', $rootScope.studentArr);

  function init(){
    console.log('this is init');
    if(Students.all){
      $rootScope.studentArr = Students.all;
    } else {
      $rootScope.studentArr = [];
    }
    console.log('$rootScope.studentArr AFTER init', $rootScope.studentArr);
  }
  init();

  $scope.addStudent = function(student){
    var s = {
      createdAt: Date(Date.now()),
      name: student.name,
      cohort: student.cohort,
      assignments: [
        {
          title: 'init',
          date: Date(Date.now()),
          functionality: 0,
          readability: 0,
          style: 0,
          uiux: 0,
          deployment: 0,
          total: 0
        }
      ]
    };

    console.log('student', s);
    Students.add(s);
  };
});
