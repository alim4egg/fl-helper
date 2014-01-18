var TodoCtrl, todomvc, vrem;

vrem = '';

todomvc = angular.module("todomvc", []);

todomvc.controller("TodoCtrl", TodoCtrl = function($scope, $location, todoStorage) {
  var todos;
  todos = $scope.todos = todoStorage.get();
  $scope.newOffersTitle = "";
  $scope.newOffersText = "";
  $scope.addTodo = function() {
    var newOffersText, newOffersTitle, type;
    type = $('.modal').data('type');
    console.log(type);
    newOffersTitle = $scope.newOffersTitle;
    newOffersText = $scope.newOffersText;
    if (type === 'add') {
      todos.push({
        title: newOffersTitle.trim(),
        text: newOffersText.trim()
      });
    }
    if (type === 'edit') {
      vrem.title = newOffersTitle.trim();
      vrem.text = newOffersText.trim();
    }
    todoStorage.put(todos);
    newOffersTitle = "";
    return newOffersText = "";
  };
  $scope.editTodo = function(todo) {
    $scope.newOffersTitle = todo.title;
    $scope.newOffersText = todo.text;
    return vrem = todo;
  };
  return $scope.removeTodo = function(todo) {
    todos.splice(todos.indexOf(todo), 1);
    return todoStorage.put(todos);
  };
});
