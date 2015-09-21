class @FetchBtnView extends Backbone.View
  el: '.js-btn-fetch'

  events:
    'click': 'onClickFetchBtn'

  onClickFetchBtn: =>
    @collection.genData()
