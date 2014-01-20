var storageSet;

storageSet = function(data) {
  return chrome.storage.local.set({
    fl_helper_offers: JSON.stringify(data)
  });
};
