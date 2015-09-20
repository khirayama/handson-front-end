class @SeniorModel
  constructor: ->
    @_events = {}
    @_isModalShowing = false
    @_data = [
      { name: 'AAA', amount: 2000 }
      { name: 'BBB', amount: 10 }
      { name: 'CCC', amount: 10000 }
    ]

  getData: ->
    @_data

  setData: (value) ->
    @_data = value

  getIsModalShowing: ->
    @_isModalShowing

  toggleIsModalShowing: ->
    @_isModalShowing = !@_isModalShowing
    @emit('change_isModalShowing')

  emit: (eventName) ->
    for callback in @_events[eventName]
      callback()

  onChangeData: (callback) ->
    @_events['change_data'] = @_events['change_data'] || []
    @_events['change_data'].push(callback)

  onChangeIsModalShowing: (callback) ->
    @_events['change_isModalShowing'] = @_events['change_isModalShowing'] || []
    @_events['change_isModalShowing'].push(callback)

  addData: (item) ->
    @_data.push(item)
    @emit('change_data')
