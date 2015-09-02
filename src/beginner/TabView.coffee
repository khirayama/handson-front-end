class TabView
  constructor: ($el) ->
    @index = 0
    @$el = $el
    @$btns = $el.querySelectorAll('.js-tab-btn')
    @$contents = $el.querySelectorAll('.js-tab-content')
    @toggleBtn()
    @showContent()
    @setEventListeners()

  setEventListeners: ->
    _this = @
    for $btn, i in @$btns
      $btn.dataset.index = i
      $btn.addEventListener 'click', ->
        _this.index = +@dataset.index
        _this.toggleBtn()
        _this.showContent()

  toggleBtn: ->
    for $btn, i in @$btns
      if @index == i
        $btn.classList.add('is-active')
      else
        $btn.classList.remove('is-active')

  showContent: ->
    for $content, i in @$contents
      if @index == i
        $content.classList.add('is-active')
      else
        $content.classList.remove('is-active')

window.TabView = TabView
