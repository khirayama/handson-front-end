MicroView = microModule.import('MicroView')

class FetchBtnView extends MicroView
  constructor: (@model, @$el) ->
    super()

  setEventListeners: ->
    @on(@$el, 'click', =>
      @model.fetch()
    )

microModule.export(FetchBtnView)
