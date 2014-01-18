var TodoCtrl, todomvc;

todomvc = angular.module("todomvc", []);

todomvc.controller("TodoCtrl", TodoCtrl = function($scope, $location, todoStorage) {
  var todos;
  todos = $scope.todos = todoStorage.get();
  $scope.newOffersTitle = "";
  $scope.newOffersText = "";
  console.log($scope.todos);
  $scope.addTodo = function() {
    var newOffersText, newOffersTitle, type;
    type = $('.modal').data('type');
    console.log(type);
    newOffersTitle = $scope.newOffersTitle;
    newOffersText = $scope.newOffersText;
    todos.push({
      title: newOffersTitle.trim(),
      text: newOffersText.trim()
    });
    todoStorage.put(todos);
    newOffersTitle = "";
    return newOffersText = "";
  };
  return $scope.removeTodo = function(todo) {
    todos.splice(todos.indexOf(todo), 1);
    return todoStorage.put(todos);
  };
});
