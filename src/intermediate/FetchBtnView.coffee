class FetchBtnView
  constructor: (model, $el) ->
    @model = model
    @$el = $el
    @setEventListeners()

  setEventListeners: () ->
    @$el.addEventListener 'click', () =>
      @model.fetch()

window.FetchBtnView = FetchBtnView
