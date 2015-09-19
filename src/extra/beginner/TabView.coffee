MicroView = microModule.import('MicroView')

class TabView extends MicroView
  constructor:  (@$el) ->
    @_index = 0
    @$btns = @find('.js-tab-btn')
    @$contents = @find('.js-tab-content')
    for $btn, i in @$btns
      $btn.dataset.index = i
    @toggleBtn()
    @showContent()
    super()

  setEventListeners: ->
    @on(@$btns, 'click', (e) =>
      @_index = +@data(e.target, 'index')
      @toggleBtn()
      @showContent()
    )

  toggleBtn: ->
    for $btn, i in @$btns
      if @_index == i
        @addClass($btn, 'is-active')
      else
        @removeClass($btn, 'is-active')

  showContent: ->
    for $content, i in @$contents
      if @_index == i
        @addClass($content, 'is-active')
      else
        @removeClass($content, 'is-active')

microModule.export(TabView)
