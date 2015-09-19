class @SeniorModel
  constructor: ->
    @_events = {}
    @_isShowModal = false
    @_data = [
      { name: 'AAA', amount: 2000 }
      { name: 'BBB', amount: 10 }
      { name: 'CCC', amount: 10000 }
    ]

  getData: ->
    @_data

  setData: (value) ->
    @_data = value

  getIsShowModal: ->
    @_isShowModal

  toggleIsShowModal: ->
    @_isShowModal = !@_isShowModal
    @emit('change_isShowModal')

  emit: (eventName) ->
    for callback in @_events[eventName]
      callback()

  onChangeData: (callback) ->
    @_events['change_data'] = @_events['change_data'] or []
    @_events['change_data'].push(callback)

  onChangeIsShowModal: (callback) ->
    @_events['change_isShowModal'] = @_events['change_isShowModal'] or []
    @_events['change_isShowModal'].push(callback)

  addData: (item) ->
    @_data.push(item)
    @setData(@_data)
    @emit('change_data')
