class MicroModel
  _events = {}

  get: (key) ->
    @[key]

  set: (key, value, silent) ->
    @[key] = value
    if !_events[key] || silent
      return
    for callback in _events[key]
      (callback)()

  onChange: (key, callback) ->
    _events[key] = _events[key] || []
    _events[key].push(callback)

if microModule
  microModule.export(MicroModel)
else
  window.Micro = Micro || {}
  window.Micro.Model = MicroModel
