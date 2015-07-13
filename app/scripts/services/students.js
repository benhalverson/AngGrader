'use strict';

// AUTOCREATED BY YO USING yo angular:factory students

/**
 * @ngdoc service
 * @name angGraderApp.students
 * @description
 * # students
 * Factory in the angGraderApp.
 */
angular.module('angGraderApp')
  .factory('students', function($firebaseArray, $firebaseObject, FIREBASE_URL, $rootScope) {
    var ref = new Firebase(FIREBASE_URL);
    var studentsRoute = $firebaseArray(ref.child('students'));
    // var studentsList = $rootScope.studentArr;

    var Students = {
      all: function(studentId) {
        return $firebaseObject(ref.child('students'));
      },
      add: function(student) {
        console.log('student', student);
        console.log('studentsRoute', studentsRoute);
        return studentsRoute.$add(student);
      },
      get: function(studentId) {
        return $firebaseObject(ref.child('students').child(studentId));
      },
      delete: function(studentId) {
        return studentsRoute.$remove(studentId)
        .then(function(ref){
          console.log('delete ref',ref);
        }, function(err){
          console.log(err);
        });
      }
    };

    return Students;
  });
