(function() {
  var FetchBtnView, IntermediateModel, MicroView, TableView;

  MicroView = microModule["import"]('MicroView');

  IntermediateModel = microModule["import"]('IntermediateModel');

  TableView = microModule["import"]('TableView');

  FetchBtnView = microModule["import"]('FetchBtnView');

  (function() {
    var $fetchBtns, $tables, model;
    $tables = MicroView.find('.js-table');
    $fetchBtns = MicroView.find('.js-btn-fetch');
    model = new IntermediateModel();
    MicroView.render(TableView, $tables, [model]);
    return MicroView.render(FetchBtnView, $fetchBtns, [model]);
  })();

}).call(this);
