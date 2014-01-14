openOptions = ->
  optionsUrl = chrome.extension.getURL("src/options/options.html")
  chrome.tabs.query {}, (extensionTabs) ->
    found = false
    i = 0
    while i < extensionTabs.length
      if optionsUrl is extensionTabs[i].url
        found = true
        chrome.tabs.update extensionTabs[i].id,
          selected: true
      i++

    chrome.tabs.create url: "src/options/options.html"  unless found

notify = (text) ->
  havePermission = window.webkitNotifications.checkPermission()
  if havePermission is 0
    notification = window.webkitNotifications.createNotification("/assets/icons/icon54.png", "Freelance helper", text)
    setTimeout (->
      notification.close()
    ), 4000
    notification.onclick = ->
      window.open "http://fl.ru"
      notification.close()
    notification.show()
  else
    window.webkitNotifications.requestPermission()

chrome.browserAction.onClicked.addListener (tab) ->
  openOptions()


request = $.ajax(
  url: "https://www.fl.ru/"
)
request.done (data) ->
  html = $.parseHTML(data)
  notiBox = $(html).find('#__notification_box')
  return false if notiBox.length < 1

  notiBoxItem = notiBox.find('.b-bar__menu-link')
  notiArray = []
  notiBoxItem.each (i) ->
    mes = $(this).html()
    mes = mes.match(/e"><\/span>(.*)/)[1].trim()
    notiArray[i] = mes
  console.log notiArray


#setInterval (->
#  notify('Привет, как дела?')
#), 5000
notify('У вас 2 непрочитанных сообщения')
notify('В ваших проектах 9 новых ответов')