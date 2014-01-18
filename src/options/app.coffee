vrem = ''

todomvc = angular.module("todomvc", [])
todomvc.controller "TodoCtrl", TodoCtrl = ($scope, $location, todoStorage) ->
  todos = $scope.todos = todoStorage.get()
  $scope.newOffersTitle = ""
  $scope.newOffersText = ""
  $scope.addTodo = ->
    type = $('.modal').data('type')
    console.log type
    newOffersTitle = $scope.newOffersTitle
    newOffersText = $scope.newOffersText

    if type == 'add'
      todos.push
        title: newOffersTitle.trim()
        text: newOffersText.trim()
    if type == 'edit'
      vrem.title = newOffersTitle.trim()
      vrem.text = newOffersText.trim()

    todoStorage.put todos
    newOffersTitle = ""
    newOffersText = ""

  $scope.editTodo = (todo) ->
    $scope.newOffersTitle = todo.title
    $scope.newOffersText = todo.text
    vrem = todo


  $scope.removeTodo = (todo) ->
    todos.splice todos.indexOf(todo), 1
    todoStorage.put todos