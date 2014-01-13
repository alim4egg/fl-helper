(function() {
  var Main, checkUrl, main;

  checkUrl = function(url) {
    var pathname;
    pathname = window.location.pathname;
    pathname = pathname.split("/")[1];
    if (url === pathname) {
      return true;
    }
    return false;
  };

  Main = (function() {
    function Main() {
      console.log('Main');
    }

    return Main;

  })();

  main = new Main();

}).call(this);

(function() {
  var alwaysHideComment, checkUrl, saveComment;

  checkUrl = function(url) {
    var pathname;
    pathname = window.location.pathname;
    pathname = pathname.split("/")[1];
    if (url === pathname) {
      return true;
    }
    return false;
  };

  saveComment = function() {
    var flCommentText, text;
    text = $("#ps_text");
    flCommentText = localStorage.getItem('flCommentText');
    if (flCommentText) {
      if (flCommentText.length > 0) {
        $("#ps_text").val(flCommentText);
      }
    }
    text.keyup(function() {
      return localStorage.setItem('flCommentText', $(this).val());
    });
    return $('#ps_add').click(function() {
      return localStorage.setItem('flCommentText', '');
    });
  };

  alwaysHideComment = function() {
    var checkbox;
    checkbox = $('#ps_for_customer_only');
    return checkbox.attr('checked', 'checked');
  };

  if (checkUrl('projects')) {
    saveComment();
    alwaysHideComment();
  }

}).call(this);
