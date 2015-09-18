class @TableView
  _data: []
  _reverse: false

  constructor: (@$el, @model) ->
    @_data = @model.get('data')
    @$tbody = @$el.querySelector('.js-tbody')
    @$sortBtns = @$el.querySelectorAll('.js-btn-sort')
    @render()
    @setEventListeners()

  setEventListeners: ->
    @model.onChange 'data', =>
      @_data = @model.get('data')
      @render()

    for $sortBtn in @$sortBtns
      $sortBtn.addEventListener 'click', (e) =>
        sortkey = e.target.dataset.sortkey
        @_sortByKey(sortkey)
        @render()

  addComma: (num) ->
    String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')

  template: (data) ->
    "<tr><td>#{data.name}</td><td>#{@addComma(data.amount)}</td></tr>"

  _sortByKey: (key) ->
    @_reverse = not @_reverse
    @_data.sort (a, b) =>
      x = a[key]
      y = b[key]

      if @_reverse
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

  render: ->
    tableEl = []

    for data in @_data
      tableEl.push(@template(data))

    @$tbody.innerHTML = tableEl.join('')
