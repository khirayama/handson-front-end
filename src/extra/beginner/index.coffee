MicroView = microModule.import('MicroView')
TabView = microModule.import('TabView')

do ->
  $tabs = MicroView.find('.js-tab')

  MicroView.render(TabView, $tabs)
