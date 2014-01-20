checkUrl = (url) ->
  pathname = window.location.pathname
  pathname = pathname.split("/")[1]
  return true  if url is pathname
  false

#class Main
#  constructor: () ->
#    console.log 'Main'
#
#$ ->
#  main = new Main()