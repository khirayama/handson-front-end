MicroView = microModule.import('MicroView')

class TabView extends MicroView
  _index = 0

  constructor:  (@$el) ->
    @$btns = @find('.js-tab-btn')
    @$contents = @find('.js-tab-content')
    super()

  init: ->
    for $btn, i in @$btns
      $btn.dataset.index = i
    @toggleBtn()
    @showContent()

  setEventListeners: ->
    @on(@$btns, 'click', (e) =>
      _index = +@data(e.target, 'index')
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
