'use strict';
angular
.module('angGraderApp')
.factory('Assignment', function($firebaseArray, $firebaseObject, FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL);
  var posts = $firebaseArray(ref.child('posts'));


  var Post = {
    all:posts,
    create: function(post) {
      console.log(post);
      var studentArr = []
      var p = {
        date:post.date.toString(),
        functionality: post.functionality,
        url: post.url,
        title: post.title,
        readability: post.readability,
        style: post.style,
        uiux: post.uiux,
        total: post.total,
        deployment: post.deployment,
        students: studentArr
      };
      return posts.$add(p);
    },
    get: function(postId) {
      return $firebaseObject(ref.child('posts').child(postId));
    },
    delete: function(postId) {
      console.log("services log", postId);
      return posts.$remove(postId).then(function(ref){
        console.log(ref);
      }, function(err){
        console.log(err);
      });
      //   return ref.child('posts').child(postId).$remove().then(function(ref) {
      //       }, function(error) {
      //         console.log("Error:", error);
      //       });
    }
  };
  return Post;
});
