#chekLocalStorage = ->
#  typeLocalStorage = typeof localStorage.getItem('fl-offers')
#  if typeLocalStorage isnt 'string'
#    offersArray = [
#      title: 'Ответ по программированию',
#      text: 'Привет! Я пример ответа!',
#    ,
#      title: 'Ответ по дизайну',
#      text: 'Привет! Я пример ответа!',
#    ,
#      title: 'Ответ по верстке',
#      text: 'Привет! Я пример ответа!',
#    ]
#    localStorage.setItem('fl-offers', JSON.stringify(offersArray))

OffersApp = angular.module("OffersApp", [])
OffersApp.controller "TodoCtrl", TodoCtrl = ($scope) ->
  storage = chrome.storage.local
  temp = ''
  $scope.storageSet = ->
    storage.set {"fl_offers" : JSON.stringify($scope.todos)}
  $scope.newOffersTitle = ''
  $scope.newOffersText = ''
  storage.get "fl_offers", (data) ->
    $scope.$apply ->
      $scope.todos = JSON.parse(data.fl_offers)
  console.log '1'
  $scope.addTodo = ->
    type = $('.modal').data('type')
    newOffersTitle = $scope.newOffersTitle
    newOffersText = $scope.newOffersText
    if type == 'add'
      $scope.todos.push
        title: newOffersTitle.trim()
        text: newOffersText.trim()
    if type == 'edit'
      temp.title = $scope.newOffersTitle.trim()
      temp.text = $scope.newOffersTitle.trim()
    $scope.storageSet()
    newOffersTitle = ""
    newOffersText = ""

  $scope.editTodo = (todo) ->
    $scope.newOffersTitle = todo.title
    $scope.newOffersText = todo.text
    temp = todo

  $scope.removeTodo = (todo) ->
    $scope.todos.splice $scope.todos.indexOf(todo), 1
    $scope.storageSet()