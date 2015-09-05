microModule.export class MicroModel
  constructor: ->

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


