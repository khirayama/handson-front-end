MicroView = microModule.import 'MicroView'

microModule.export class FetchBtnView extends MicroView
  constructor: (@model, @$el) ->
    super()

  setEventListeners: ->
    @on @$el, 'click', =>
      @model.fetch()
