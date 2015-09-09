class @SeniorModel
  _events: {}
  isShowModal: false
  data: [
    { name: 'AAA', amount: 2000 }
    { name: 'BBB', amount: 10 }
    { name: 'CCC', amount: 10000 }
  ]

  get: (key) ->
    @[key]

  set: (key, value, silent) ->
    @[key] = value
    if not @_events[key] or silent
      return
    for callback in @_events[key]
      (callback)()

  onChange: (key, callback) ->
    @_events[key] = @_events[key] or []
    @_events[key].push(callback)

  addData: (item) ->
    @data.push(item)
    @set('data',  @data)

