MicroView = microModule.import('MicroView')

class TabView extends MicroView
  index: 0

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
    _this = @

    @on(@$btns, 'click', ->
      _this.index = +@dataset.index
      _this.toggleBtn()
      _this.showContent()
    )

  toggleBtn: ->
    for $btn, i in @$btns
      if @index == i
        @addClass($btn, 'is-active')
      else
        @removeClass($btn, 'is-active')

  showContent: ->
    for $content, i in @$contents
      if @index == i
        @addClass($content, 'is-active')
      else
        @removeClass($content, 'is-active')

microModule.export(TabView)
