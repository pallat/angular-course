
var app = angular.module('myApp', []);

app.filter('slice', function() {
  return function(arr, start, end) {
    return (arr || []).slice(start, end);
  };
});

app.filter('preview', function() {
  return function(arr, start, end) {
    return (arr || []).slice(start, end)+'...';
  };
});

app.controller('BlogListController', function() {
    var ctrl = this;

    ctrl.posts = [];

    ctrl.save = save;

    function save() {
        ctrl.posts.push({
            title: ctrl.title,
            content: ctrl.content,
            author: ctrl.author,
            date: new Date()
        });
    }
});
