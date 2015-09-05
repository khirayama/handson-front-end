class MicroModule
  _modules: {}

  export: (module) ->
    @_modules[module.name] = module

  import: (name) ->
    @_modules[name]

window.microModule = new MicroModule
