class @TabView
  _index = 0

  constructor: (@$el) ->
    @$btns = @$el.querySelectorAll('.js-tab-btn')
    @$contents = @$el.querySelectorAll('.js-tab-content')
    @toggleBtn()
    @showContent()
    @setEventListeners()

  setEventListeners: ->
    for $btn, i in @$btns
      $btn.dataset.index = i
      $btn.addEventListener('click', (event) =>
        _index = +event.target.dataset.index
        @.toggleBtn()
        @.showContent()
      )

  toggleBtn: ->
    for $btn, i in @$btns
      if _index is i
        $btn.classList.add('is-active')
      else
        $btn.classList.remove('is-active')

  showContent: ->
    for $content, i in @$contents
      if _index is i
        $content.classList.add('is-active')
      else
        $content.classList.remove('is-active')
