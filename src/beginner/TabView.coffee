class @TabView
  constructor: (@$el) ->
    @index = 0
    @$btns = @$el.querySelectorAll('.js-tab-btn')
    @$contents = @$el.querySelectorAll('.js-tab-content')
    @toggleBtn()
    @showContent()
    @setEventListeners()

  setEventListeners: ->
    for $btn, i in @$btns
      $btn.dataset.index = i
      $btn.addEventListener 'click', (e) =>
        @index = +e.target.dataset.index
        @toggleBtn()
        @showContent()

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
