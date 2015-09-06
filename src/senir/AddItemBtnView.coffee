class @AddItemBtnView
  constructor: (@model, @$el) ->
    @setEventListeners()

  setEventListeners: ->
    @$el.addEventListener('click', =>
      @model.set('isShowModal', true)
    )
