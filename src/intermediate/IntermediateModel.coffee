class @IntermediateModel
  _events = {}
  data = []

  constructor: ->
    @fetch()

  getData: ->
    data

  setData: (value) ->
    data = value

  emit: (eventName) ->
    for callback in _events[eventName]
      callback()

  onChangeData: (callback) ->
    _events['change_data'] = _events['change_data'] or []
    _events['change_data'].push(callback)

  fetch: ->
    # suppose ajax
    setTimeout( =>
      res = @genData()
      @setData(res)
      @emit('change_data')
    , 300)

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
    allData.sort((x, y) ->
      Math.random() - Math.random()
    )
    allData[0...5]
