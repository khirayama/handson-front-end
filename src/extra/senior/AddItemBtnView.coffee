MicroView = microModule.import('MicroView')

class AddItemBtnView extends MicroView
  constructor: (@model, @$el) ->
    super()

  setEventListeners: ->
    @on(@$el, 'click', =>
      @model.set('isShowModal', true)
    )

microModule.export(AddItemBtnView)
