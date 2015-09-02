class TableView
  constructor: (model, $el) ->
    @data = []
    @reverse = false
    @model = model
    @$el = $el
    @$tbody = @$el.querySelector('.js-tbody')
    @$sortBtns = @$el.querySelectorAll('.js-btn-sort')
    @render()
    @setEventListeners()

  setEventListeners: ->
    _this = @

    @model.onChange 'data', () =>
      @data = @model.get('data')
      @render()

    for $sortBtn in @$sortBtns
      $sortBtn.addEventListener 'click', () ->
        sortkey = @dataset.sortkey
        _this._sortByKey(sortkey)
        _this.render()

  addComma: (num) ->
    String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')

  template: (data) ->
    "<tr><td>#{data.name}</td><td>#{@addComma(data.amount)}</td></tr>"

  _sortByKey: (key) ->
    @reverse = !@reverse
    @data.sort (a, b) =>
      x = a[key]
      y = b[key]

      if @reverse
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


  render: () ->
    tableEl = []

    for data in @data
      tableEl.push(@template(data))

    @$tbody.innerHTML = tableEl.join('')

window.TableView = TableView
