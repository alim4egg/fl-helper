var OffersApp, TodoCtrl;

OffersApp = angular.module("OffersApp", []);

OffersApp.controller("TodoCtrl", TodoCtrl = function($scope) {
  var storage, temp;
  storage = chrome.storage.local;
  temp = '';
  $scope.storageSet = function() {
    return storage.set({
      "fl_offers": JSON.stringify($scope.todos)
    });
  };
  $scope.newOffersTitle = '';
  $scope.newOffersText = '';
  storage.get("fl_offers", function(data) {
    return $scope.$apply(function() {
      return $scope.todos = JSON.parse(data.fl_offers);
    });
  });
  console.log('1');
  $scope.addTodo = function() {
    var newOffersText, newOffersTitle, type;
    type = $('.modal').data('type');
    newOffersTitle = $scope.newOffersTitle;
    newOffersText = $scope.newOffersText;
    if (type === 'add') {
      $scope.todos.push({
        title: newOffersTitle.trim(),
        text: newOffersText.trim()
      });
    }
    if (type === 'edit') {
      temp.title = $scope.newOffersTitle.trim();
      temp.text = $scope.newOffersTitle.trim();
    }
    $scope.storageSet();
    newOffersTitle = "";
    return newOffersText = "";
  };
  $scope.editTodo = function(todo) {
    $scope.newOffersTitle = todo.title;
    $scope.newOffersText = todo.text;
    return temp = todo;
  };
  return $scope.removeTodo = function(todo) {
    $scope.todos.splice($scope.todos.indexOf(todo), 1);
    return $scope.storageSet();
  };
});
