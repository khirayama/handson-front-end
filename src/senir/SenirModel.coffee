class @SenirModel
  _events: {}
  isShowModal: false
  data: [
    {name: 'AAA', amount: 2000}
    {name: 'BBB', amount: 10}
    {name: 'CCC', amount: 10000}
  ]

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

  addData: (item) ->
    @data.push(item)
    @set('data',  @data)

