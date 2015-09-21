(function() {
  (function() {
    var $tab, $tabs, i, len, results;
    $tabs = document.querySelectorAll('.js-tab');
    results = [];
    for (i = 0, len = $tabs.length; i < len; i++) {
      $tab = $tabs[i];
      results.push(new TabView($tab));
    }
    return results;
  })();

}).call(this);
