class @AddItemBtnView
  constructor: (@$el, @model) ->
    @setEventListeners()

  setEventListeners: ->
    @$el.addEventListener 'click', =>
      @model.toggleIsModalShowing()
