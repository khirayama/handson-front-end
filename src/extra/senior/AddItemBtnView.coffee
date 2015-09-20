MicroView = microModule.import('MicroView')

class AddItemBtnView extends MicroView
  constructor: (@$el, @model) ->
    super()

  setEventListeners: ->
    @on @$el, 'click', =>
      @model.set('isShowModal', true)

microModule.export(AddItemBtnView)
