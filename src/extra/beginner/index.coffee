TabView = microModule.import('TabView')

do ->
  $tabs = document.querySelectorAll('.js-tab')

  for $tab in $tabs
    new TabView($tab)
