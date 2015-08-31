window.App = window.App || {}

class App.Table
  constructor: ($el) ->
    @$el = $el
    @$tbody = @$el.querySelector('.js-tbody')
    @$sortBtns = @$el.querySelectorAll('.js-sort-btn')
    @render()
    @setEventListeners()

  setEventListeners: ->
    _this = @

    Step2.state.onChange 'tableData', () =>
      @render()

    for $sortBtn in @$sortBtns
      $sortBtn.addEventListener 'click', () ->
        sortkey = @dataset.sortkey
        Step2.state.sortByKey(sortkey)
        _this.render()

  addComma: (num) ->
    String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')

  template: (data) ->
    "<tr><td>#{data.name}</td><td>#{@addComma(data.amount)}</td></tr>"

  render: () ->
    tableData = Step2.state.get('tableData')
    tableEl = []

    for _tableData in tableData
      tableEl.push(@template(_tableData))

    @$tbody.innerHTML = tableEl.join('')
