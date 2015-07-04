'use strict';
angular
  .module('angGraderApp')
  .factory('Assignment', function($firebaseArray, $firebaseObject, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL);
    var posts = $firebaseArray(ref.child('posts'));
    var remove = function(id) {
      posts.$remove(id);
    };

    var Post = {
      all:posts,
      create: function(post) {
        return posts.$add(post);
      },
      get: function(postId) {
        return $firebaseObject(ref.child('posts').child(postId));
      },
      delete: remove

      // delete: function(posts) {
      //   return posts.$remove(posts);
      // }
    };
    return Post;
  });
