var notify, openOptions, request;

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

notify = function(text) {
  var havePermission, notification;
  havePermission = window.webkitNotifications.checkPermission();
  if (havePermission === 0) {
    notification = window.webkitNotifications.createNotification("/assets/icons/icon54.png", "Freelance helper", text);
    setTimeout((function() {
      return notification.close();
    }), 4000);
    notification.onclick = function() {
      window.open("http://fl.ru");
      return notification.close();
    };
    return notification.show();
  } else {
    return window.webkitNotifications.requestPermission();
  }
};

chrome.browserAction.onClicked.addListener(function(tab) {
  return openOptions();
});

request = $.ajax({
  url: "https://www.fl.ru/"
});

request.done(function(data) {
  var html, notiArray, notiBox, notiBoxItem;
  html = $.parseHTML(data);
  notiBox = $(html).find('#__notification_box');
  if (notiBox.length < 1) {
    return false;
  }
  notiBoxItem = notiBox.find('.b-bar__menu-link');
  notiArray = [];
  notiBoxItem.each(function(i) {
    var mes;
    mes = $(this).html();
    mes = mes.match(/e"><\/span>(.*)/)[1].trim();
    return notiArray[i] = mes;
  });
  return console.log(notiArray);
});

notify('У вас 2 непрочитанных сообщения');

notify('В ваших проектах 9 новых ответов');
