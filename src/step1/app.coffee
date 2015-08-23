class Tab
  constructor: ($el) ->
    @index = 0
    @$el = $el
    @$btns = $el.querySelectorAll('.js-tab-btn')
    @$contents = $el.querySelectorAll('.js-tab-content')
    @showContent()
    @setEventListeners()

  setEventListeners: ->
    self = @
    for $btn, i in @$btns
      $btn.dataset.index = i
      $btn.addEventListener 'click', ->
        self.index = +@dataset.index
        self.showContent()

  showContent: ->
    for $content, i in @$contents
      if @index == i
        $content.style.display = 'block'
      else
        $content.style.display = 'none'

(->
  $tab = document.querySelector('.tab')
  new Tab($tab)
)()
