(->
  $tabs = document.querySelectorAll('.js-tab')
  for $tab in $tabs
    new TabView($tab)
)()
