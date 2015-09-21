(function() {
  var MicroView, TabView;

  MicroView = microModule["import"]('MicroView');

  TabView = microModule["import"]('TabView');

  (function() {
    var $tabs;
    $tabs = MicroView.find('.js-tab');
    return MicroView.render(TabView, $tabs);
  })();

}).call(this);
