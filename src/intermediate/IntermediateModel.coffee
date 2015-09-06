class @IntermediateModel
  _events: {}
  data: []

  constructor: ->
    @fetch()

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

  fetch: ->
    setTimeout =>
      res = @genData()
      @set('data', res)
    , 300

  genData: ->
    allData = [
      { name: 'AAA', amount: 3000 }
      { name: 'BBB', amount: 1000 }
      { name: 'CCC', amount: 2000 }
      { name: 'DDD', amount: 5000 }
      { name: 'EEE', amount: 10000 }
      { name: 'FFF', amount: 1000 }
      { name: 'GGG', amount: 3000 }
      { name: 'HHH', amount: 1000 }
      { name: 'III', amount: 2000 }
      { name: 'JJJ', amount: 5000 }
      { name: 'KKK', amount: 10000 }
    ]
    allData.sort (x, y) ->
      Math.random() - Math.random()
    allData[0...5]
