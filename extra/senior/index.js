(function() {
  var AddItemBtnView, AddItemModalView, MicroView, SeniorModel, TableView;

  MicroView = microModule["import"]('MicroView');

  SeniorModel = microModule["import"]('SeniorModel');

  TableView = microModule["import"]('TableView');

  AddItemBtnView = microModule["import"]('AddItemBtnView');

  AddItemModalView = microModule["import"]('AddItemModalView');

  (function() {
    var $addItemBtns, $addItemModals, $tables, model;
    $tables = MicroView.find('.js-table');
    $addItemBtns = MicroView.find('.js-btn-add-item');
    $addItemModals = MicroView.find('.js-modal-add-item');
    model = new SeniorModel();
    MicroView.render(TableView, $tables, [model]);
    MicroView.render(AddItemBtnView, $addItemBtns, [model]);
    return MicroView.render(AddItemModalView, $addItemModals, [model]);
  })();

}).call(this);
