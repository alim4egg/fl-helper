var accordian, offers;

offers = function() {
  var add, modal, modalForm, modalName, modalOffersAdd, modalText;
  add = $('.offers-add');
  modal = $('.modal');
  modalName = $('#modal_name');
  modalText = $('#modal_text');
  modalOffersAdd = $('.modal-offers-add');
  modalForm = $('.modal-form');
  add.click(function() {
    modal.find('.modal-title').text('Добавить предложение');
    modalOffersAdd.data('type', 'add');
    modalName.val('');
    return modalText.val('');
  });
  return modalForm.submit(function() {
    var type;
    type = modalOffersAdd.data('type');
    console.log(type);
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
  offers();
  return console.log;
});
