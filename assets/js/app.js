var TodoCtrl, chekLocalStorage, todomvc;

chekLocalStorage = function() {
  var offersArray, typeLocalStorage;
  typeLocalStorage = typeof localStorage.getItem('fl-offers');
  if (typeLocalStorage !== 'string') {
    offersArray = [
      {
        title: 'Ответ по программированию',
        text: 'Привет! Я пример ответа!'
      }, {
        title: 'Ответ по дизайну',
        text: 'Привет! Я пример ответа!'
      }, {
        title: 'Ответ по верстке',
        text: 'Привет! Я пример ответа!'
      }
    ];
    return localStorage.setItem('fl-offers', JSON.stringify(offersArray));
  }
};

todomvc = angular.module("todomvc", []);

todomvc.controller("TodoCtrl", TodoCtrl = function($scope, $location, todoStorage) {
  var temp, todos;
  chekLocalStorage();
  temp = '';
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
      temp.title = newOffersTitle.trim();
      temp.text = newOffersText.trim();
    }
    todoStorage.put(todos);
    newOffersTitle = "";
    return newOffersText = "";
  };
  $scope.editTodo = function(todo) {
    $scope.newOffersTitle = todo.title;
    $scope.newOffersText = todo.text;
    return temp = todo;
  };
  return $scope.removeTodo = function(todo) {
    todos.splice(todos.indexOf(todo), 1);
    return todoStorage.put(todos);
  };
});
