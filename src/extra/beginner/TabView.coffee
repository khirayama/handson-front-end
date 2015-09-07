MicroView = microModule.import('MicroView')

class TabView extends MicroView
  _index = 0

  constructor:  (@$el) ->
    @$btns = @$el.querySelectorAll('.js-tab-btn')
    @$contents = @$el.querySelectorAll('.js-tab-content')
    super()

  init: ->
    for $btn, i in @$btns
      $btn.dataset.index = i
    @toggleBtn()
    @showContent()

  setEventListeners: ->
    @on(@$btns, 'click', (event) =>
      _index = +event.target.dataset.index
      @toggleBtn()
      @showContent()
    )

  toggleBtn: ->
    for $btn, i in @$btns
      if _index is i
        @addClass($btn, 'is-active')
      else
        @removeClass($btn, 'is-active')

  showContent: ->
    for $content, i in @$contents
      if _index is i
        @addClass($content, 'is-active')
      else
        @removeClass($content, 'is-active')

microModule.export(TabView)
