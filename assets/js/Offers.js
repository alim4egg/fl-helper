var offers;

offers = function() {
  var form, select, table, tableTr;
  form = $('#form_add_offer');
  table = form.find('table').eq(0);
  tableTr = table.find('tr:eq(1)');
  tableTr.after('<tr valign="top">\n  <td style="padding-right: 40px; padding-bottom:6px;font-weight:bold;">Готовый ответ</td>\n  <td style="padding-right:6px;padding-bottom:6px;"></td>\n  <td style="padding-right:6px;padding-bottom:6px;" colspan="5">\n    <select class="fl-helper-select">\n    </select>\n  </td>\n</tr>');
  return select = $('.fl-helper-select');
};

$(function() {
  var offersArray;
  offersArray = [
    {
      title: 'Ответ по программированию',
      text: 'Привет! Я пример ответа!'
    }, {
      title: 'Ответ по дизайну',
      text: 'Привет! Я пример ответа!'
    }, {
      title: 'Ответ по верстке',
      text: 'Привет! Я пример ответа!'
    }
  ];
  chrome.storage.local.get("fl_offers", function(result) {
    return console.log(result);
  });
  return offers();
});
