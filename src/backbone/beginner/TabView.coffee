class @TabView extends Backbone.View
  className: '.js-tab'

  events:
    'click .js-tab-btn': 'onClickTabBtn'

  initialize: ->
    @_index = 0
    @$btns = @$el.find('.js-tab-btn')
    @$contents = @$el.find('.js-tab-content')
    for $btn, i in @$btns
      $btn.dataset.index = i
    @toggleBtn()
    @showContent()

  onClickTabBtn: ->
    @_index = +e.target.dataset.index
    @toggleBtn()
    @showContent()

  toggleBtn: ->
    for $btn, i in @$btns
      if index == i
        $btn.addClass('is-active')
      else
        $btn.removeClass('is-active')

  showContent: ->
    for $content, i in @$contents
      if index == i
        $content.addClass('is-active')
      else
        $content.classList.remove('is-active')
