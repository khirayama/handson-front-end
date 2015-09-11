MicroView = microModule.import('MicroView')

class TableView extends MicroView
  _data = []
  _reverse = false

  constructor: (@$el, @model) ->
    _data = @model.get('data')
    @$tbody = @find('.js-tbody')
    @$sortBtns = @find('.js-btn-sort')
    super()

  init: ->
    @render()

  setEventListeners: ->
    @model.onChange('data', =>
      _data = @model.get('data')
      @render()
    )

    @on(@$sortBtns, 'click', (e) =>
      sortkey = @data(e.target, 'sortkey')
      @_sortByKey(sortkey)
      @render()
    )

  addComma: (num) ->
    String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')

  template: (data) ->
    "<tr><td>#{data.name}</td><td>#{@addComma(data.amount)}</td></tr>"

  _sortByKey: (key) ->
    _reverse = not _reverse
    _data.sort((a, b) ->
      x = a[key]
      y = b[key]

      if _reverse
        if x > y
          return 1
        if x < y
          return -1
        return 0
      else
        if x > y
          return -1
        if x < y
          return 1
        return 0
    )

  render: ->
    tableEl = []

    for data in _data
      tableEl.push(@template(data))

    @html(@$tbody, tableEl.join(''))

microModule.export(TableView)
