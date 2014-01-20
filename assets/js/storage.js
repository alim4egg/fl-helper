var storageGet, storageSet;

storageSet = function(data) {
  return chrome.storage.local.set({
    fl_helper_offers: JSON.stringify(data)
  });
};

storageGet = function() {
  chrome.storage.local.get('fl_helper_offers', function(result) {
    console.log('1');
    return result.fl_helper_offers;
  });
  if (false) {
    return false;
  }
};
