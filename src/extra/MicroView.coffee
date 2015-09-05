class MicroView
  constructor: ->
    @init()
    @setEventListeners()

  init: ->

  setEventListeners: ->

  on: ($el, eventType, callback) ->
    if @_isDOMCollection($el)
      for _$el in $el
        _$el.addEventListener eventType, callback
    else if @_isDOM($el)
      $el.addEventListener eventType, callback
    else if @_isSelector($el)
      _$el = @$el.querySelectorAll $el
      @on _$el, eventType, callback

  addClass: ($el, className) ->
    if @_isDOMCollection($el)
      for _$el in $el
        _$el.classList.add className
    else if @_isDOM($el)
      $el.classList.add className
    else if @_isSelector($el)
      _$el = @$el.querySelectorAll $el
      @addClass _$el, className

  removeClass: ($el, className) ->
    if @_isDOMCollection($el)
      for _$el in $el
        _$el.classList.remove className
    else if @_isDOM($el)
      $el.classList.remove className
    else if @_isSelector($el)
      _$el = @$el.querySelectorAll $el
      @addClass _$el, className

  _isDOMCollection: ($el) ->
    if typeof $el == 'object' && $el.length
      return true
    return false
  _isDOM: ($el) ->
    if typeof $el == 'object' && !$el.length
      return true
    return false
  _isSelector: ($el) ->
    if typeof $el == 'string'
      return true
    return false

microModule.export MicroView
