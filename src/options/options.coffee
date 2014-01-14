offers = ->
  add = $('.offers-add')
  modal = $('.modal')
  modalName = $('#modal_name')
  modalText = $('#modal_text')
  modalOffersAdd = $('.modal-offers-add')
  modalForm = $('.modal-form')
  add.click ->
    modal.find('.modal-title').text('Добавить предложение')
    modalOffersAdd.data('type', 'add')
    modalName.val('')
    modalText.val('')
  modalForm.submit ->
    type = modalOffersAdd.data('type')
    console.log type
    modal.modal('hide')


accordian = ->
  type = false
  a = $('.tabs-menu a')
  li = $('.tabs-menu li')
  tab = $('.tabs-content')
  tabItem = $('.tabs-content .item')
  li.eq(0).addClass('active')
  tabItem.eq(0).addClass('active')
  tabItem.eq(0).css({opacity: 1})
  a.click ->
    return false if type
    return false if $(this).parent().hasClass('active')
    type = true
    id = $(this).attr('href').substr(1)
    li.removeClass('active')
    active = tab.find('.active')
    $(this).parent().addClass('active')
    active.removeClass('active')
    $('#' + id).css({left: 170})
    active.animate({left: 170, opacity: 0}, 100, 'linear', (->
      $('#' + id).animate({left: 200, opacity: 1}, 200, 'linear')
    ))
    $('#' + id).addClass('active')
    setTimeout (->
      type = false
    ), 300

$ ->
  accordian()
  offers()
  console.log