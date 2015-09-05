class MicroView
  constructor: () ->
    @init()
    @setEventListeners()

  init: ->

  setEventListeners: ->

  on: ($el, eventType, callback) ->
    if typeof $el == 'object' && $el.length
      for _$el in $el
        _$el.addEventListener eventType, callback
    else if typeof $el == 'object' && !$el.length
      $el.addEventListener eventType, callback
    else if typeof $el == 'string'
      if !@$el
        console.warn 'It needs to define @$el.'
        return
      _$el = @$el.querySelectorAll $el
      @on _$el, eventType, callback

microModule.export MicroView
