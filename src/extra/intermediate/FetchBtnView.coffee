MicroView = microModule.import('MicroView')

class FetchBtnView extends MicroView
  constructor: (@$el, @model) ->
    super()

  setEventListeners: ->
    @on(@$el, 'click', =>
      @model.fetch()
    )

microModule.export(FetchBtnView)
