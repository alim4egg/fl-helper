chekLocalStorage = ->
  typeLocalStorage = typeof localStorage.getItem('fl-offers')
  if typeLocalStorage isnt 'string'
    offersArray = [
      title: 'Ответ по программированию',
      text: 'Привет! Я пример ответа!',
    ,
      title: 'Ответ по дизайну',
      text: 'Привет! Я пример ответа!',
    ,
      title: 'Ответ по верстке',
      text: 'Привет! Я пример ответа!',
    ]
    localStorage.setItem('fl-offers', JSON.stringify(offersArray))


todomvc = angular.module("todomvc", [])
todomvc.controller "TodoCtrl", TodoCtrl = ($scope, $location, todoStorage) ->
  chekLocalStorage()
  temp = ''
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
      temp.title = newOffersTitle.trim()
      temp.text = newOffersText.trim()

    todoStorage.put todos
    newOffersTitle = ""
    newOffersText = ""

  $scope.editTodo = (todo) ->
    $scope.newOffersTitle = todo.title
    $scope.newOffersText = todo.text
    temp = todo

  $scope.removeTodo = (todo) ->
    todos.splice todos.indexOf(todo), 1
    todoStorage.put todos