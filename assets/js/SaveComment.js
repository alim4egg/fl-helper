var alwaysHideComment, saveComment;

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

$(function() {
  if (checkUrl('projects')) {
    saveComment();
    return alwaysHideComment();
  }
});
