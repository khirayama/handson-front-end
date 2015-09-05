class @AddItemModalView
  constructor: (@model, @$el) ->
    @$addItemSubmitBtn = @$el.querySelector('.js-btn-add-item-submit')
    @$itemNameInput = @$el.querySelector('.js-input-add-item-name')
    @$itemAmountInput = @$el.querySelector('.js-input-add-item-amount')
    @setEventListeners()

  setEventListeners: () ->
    @model.onChange 'isShowModal', () =>
      isShowModal = @model.get('isShowModal')

      if isShowModal
        @show()
      else
        @hide()

    @$addItemSubmitBtn.addEventListener 'click', () =>
      @addItem()

  show: () ->
    @$el.classList.add('is-open')

  hide: () ->
    @$el.classList.remove('is-open')

  addItem: () ->
    _name = @$itemNameInput.value
    _amount = @$itemAmountInput.value
    item = {name: _name, amount: _amount}
    @model.addData(item)
    @model.set 'isShowModal', false
