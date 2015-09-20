MicroView = microModule.import('MicroView')

class AddItemModalView extends MicroView
  constructor: (@$el, @model) ->
    @$addItemSubmitBtn = @find('.js-btn-add-item-submit')
    @$itemNameInput = @find('.js-input-add-item-name')
    @$itemAmountInput = @find('.js-input-add-item-amount')
    super()

  setEventListeners: ->
    @model.onChange 'isShowModal', =>
      isShowModal = @model.get('isShowModal')

      if isShowModal
        @show()
      else
        @hide()

    @on @$addItemSubmitBtn, 'click', =>
      @addItem()

  show: ->
    @addClass(@$el, 'is-open')

  hide: ->
    @removeClass(@$el, 'is-open')

  addItem: ->
    name = @value(@$itemNameInput)
    amount = @value(@$itemAmountInput)
    item = { name: name, amount: amount }
    @model.addData(item)
    @model.set('isShowModal', false)

microModule.export(AddItemModalView)
