class @TabView extends Backbone.View
  el: '.js-tab'

  events:
    'click .js-tab-btn': 'onClickTabBtn'

  initialize: ->
    @_index = 0
    @btns = @el.querySelectorAll('.js-tab-btn')
    @contents = @el.querySelectorAll('.js-tab-content')
    for $btn, i in @btns
      $btn.dataset.index = i
    @toggleBtn()
    @showContent()

  onClickTabBtn: (e) ->
    @_index = +e.target.dataset.index
    @toggleBtn()
    @showContent()

  toggleBtn: ->
    for btn, i in @btns
      if @_index == i
        btn.classList.add('is-active')
      else
        btn.classList.remove('is-active')

  showContent: ->
    for content, i in @contents
      if @_index == i
        content.classList.add('is-active')
      else
        content.classList.remove('is-active')
