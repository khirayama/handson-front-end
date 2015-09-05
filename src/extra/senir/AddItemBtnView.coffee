MicroView = microModule.import 'MicroView'

microModule.export class AddItemBtnView extends MicroView
  constructor: (@model, @$el) ->
    super()

  setEventListeners: ->
    @on @$el, 'click', =>
      @model.set 'isShowModal', true
