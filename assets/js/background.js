(function() {
  var openOptions;

  openOptions = function() {
    var optionsUrl;
    optionsUrl = chrome.extension.getURL("src/options/options.html");
    return chrome.tabs.query({}, function(extensionTabs) {
      var found, i;
      found = false;
      i = 0;
      while (i < extensionTabs.length) {
        if (optionsUrl === extensionTabs[i].url) {
          found = true;
          chrome.tabs.update(extensionTabs[i].id, {
            selected: true
          });
        }
        i++;
      }
      if (!found) {
        return chrome.tabs.create({
          url: "src/options/options.html"
        });
      }
    });
  };

  chrome.browserAction.onClicked.addListener(function(tab) {
    return openOptions();
  });

}).call(this);
