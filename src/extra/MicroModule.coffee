class MicroModule
  constructor: ->
    window.__microModules = {}

  export: (module) ->
    window.__microModules[module.name] = module

  import: (name) ->
    window.__microModules[name]

window.microModule = new MicroModule
