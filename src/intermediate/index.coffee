do ->
  $tables = document.querySelectorAll('.js-table')
  $fetchBtns = document.querySelectorAll('.js-btn-fetch')

  model = new IntermediateModel()

  for $table in $tables
    new TableView(model, $table)
  for $fetchBtn in $fetchBtns
    new FetchBtnView(model, $fetchBtn)
