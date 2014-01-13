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

chrome.browserAction.onClicked.addListener (tab) ->
  openOptions()
