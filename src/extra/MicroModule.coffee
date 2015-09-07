class MicroModule
  _modules: {}

  export: (module) ->
    if @_modules[module.name]
      console.warn("#{module.name} is already exsits. overwrite #{module.name}.")
    @_modules[module.name] = module

  import: (name) ->
    @_modules[name]

window.microModule = new MicroModule
