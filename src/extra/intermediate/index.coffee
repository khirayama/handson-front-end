MicroView = microModule.import('MicroView')
IntermediateModel = microModule.import('IntermediateModel')
TableView = microModule.import('TableView')
FetchBtnView = microModule.import('FetchBtnView')

do ->
  $tables = MicroView.find('.js-table')
  $fetchBtns = MicroView.find('.js-btn-fetch')

  model = new IntermediateModel()

  MicroView.render(TableView, $tables, [model])
  MicroView.render(FetchBtnView, $fetchBtns, [model])
