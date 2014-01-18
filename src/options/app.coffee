todomvc = angular.module("todomvc", [])
todomvc.controller "TodoCtrl", TodoCtrl = ($scope, $location, todoStorage) ->
  todos = $scope.todos = todoStorage.get()
  $scope.newOffersTitle = ""
  $scope.newOffersText = ""
  console.log $scope.todos
  $scope.addTodo = ->
    type = $('.modal').data('type')
    console.log type
    newOffersTitle = $scope.newOffersTitle
    newOffersText = $scope.newOffersText
    todos.push
      title: newOffersTitle.trim()
      text: newOffersText.trim()

    todoStorage.put todos
    newOffersTitle = ""
    newOffersText = ""

  $scope.removeTodo = (todo) ->
    todos.splice todos.indexOf(todo), 1
    todoStorage.put todos