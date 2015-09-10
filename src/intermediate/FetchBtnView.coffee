class @FetchBtnView
  constructor: (@$el, @model) ->
    @setEventListeners()

  setEventListeners: ->
    @$el.addEventListener('click', =>
      @model.fetch()
    )
