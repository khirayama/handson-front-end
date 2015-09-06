class @FetchBtnView
  constructor: (@model, @$el) ->
    @setEventListeners()

  setEventListeners: ->
    @$el.addEventListener('click', =>
      @model.fetch()
    )
