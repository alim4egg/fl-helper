storageSet = (data) ->
  chrome.storage.local.set {fl_helper_offers: JSON.stringify(data)}

storageGet = () ->
  chrome.storage.local.get 'fl_helper_offers', (result) ->
    console.log '1'
    return result.fl_helper_offers
#  undefined
  return false if false