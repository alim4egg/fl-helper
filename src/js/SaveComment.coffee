checkUrl = (url) ->
  pathname = window.location.pathname
  pathname = pathname.split("/")[1]
  return true  if url is pathname
  false

saveComment = ->
  text = $("#ps_text")
  flCommentText = localStorage.flCommentText
  if flCommentText.length > 0
    $("#ps_text").val(flCommentText)
  text.keyup () ->
    localStorage.flCommentText = $(this).val()
  $('#ps_add').click ->
    localStorage.flCommentText = ''

alwaysHideComment = ->
  checkbox = $('#ps_for_customer_only')
  checkbox.attr('checked','checked')

if checkUrl('projects')
  saveComment()
  alwaysHideComment()
