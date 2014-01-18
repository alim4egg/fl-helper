var accordian, offers;

offers = function() {
  var add, edit, modal, modalForm, modalName, modalText;
  add = $('.offers-add');
  edit = $('.offers-edit');
  modal = $('.modal');
  modalName = $('#modal_name');
  modalText = $('#modal_text');
  modalForm = $('.modal-form');
  add.click(function() {
    modal.data('type', 'add');
    modal.find('.modal-title').text('Добавить предложение');
    modalName.val('');
    return modalText.val('');
  });
  edit.click(function() {
    modal.data('type', 'edit');
    return modal.find('.modal-title').text('Редактировать предложение');
  });
  return modalForm.submit(function() {
    return modal.modal('hide');
  });
};

accordian = function() {
  var a, li, tab, tabItem, type;
  type = false;
  a = $('.tabs-menu a');
  li = $('.tabs-menu li');
  tab = $('.tabs-content');
  tabItem = $('.tabs-content .item');
  li.eq(0).addClass('active');
  tabItem.eq(0).addClass('active');
  tabItem.eq(0).css({
    opacity: 1
  });
  return a.click(function() {
    var active, id;
    if (type) {
      return false;
    }
    if ($(this).parent().hasClass('active')) {
      return false;
    }
    type = true;
    id = $(this).attr('href').substr(1);
    li.removeClass('active');
    active = tab.find('.active');
    $(this).parent().addClass('active');
    active.removeClass('active');
    $('#' + id).css({
      left: 170
    });
    active.animate({
      left: 170,
      opacity: 0
    }, 100, 'linear', (function() {
      return $('#' + id).animate({
        left: 200,
        opacity: 1
      }, 200, 'linear');
    }));
    $('#' + id).addClass('active');
    return setTimeout((function() {
      return type = false;
    }), 300);
  });
};

$(function() {
  accordian();
  return offers();
});
