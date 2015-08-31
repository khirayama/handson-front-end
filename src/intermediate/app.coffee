window.App = window.App || {}
window.Step2 = window.Step2 || {}

Step2.state =
  tableData: [
    {name: 'AAA', amount: 3000},
    {name: 'BBB', amount: 1000},
    {name: 'CCC', amount: 2000}
  ]
  _events: {}
  get: (key) ->
    this[key]

  set: (key, value, silent) ->
    this[key] = value
    if !@_events[key] || silent
      return
    for callback in @_events[key]
      (callback)()

  onChange: (key, callback) ->
    @_events[key] = @_events[key] || []
    @_events[key].push(callback)

  sortByKey: (key) ->
    @tableData.sort (a, b) ->
      x = a[key]
      y = b[key]

      if x > y
        return 1
      if x < y
        return -1
      return 0

  fetch: () ->
    setTimeout () =>
      res = [
        {name: 'DDD', amount: 5000}
        {name: 'EEE', amount: 10000}
        {name: 'FFF', amount: 1000}
      ]
      @set('tableData', res)
    , 300

  init: () ->
    @_events = {}

(->
  $table = document.querySelector('.js-table')
  $fetchBtn = document.querySelector('.js-fetch-btn')

  Step2.state.init()
  new App.Table($table)
  new App.FetchBtn($fetchBtn)
)()
