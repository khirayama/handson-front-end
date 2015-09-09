do ->
  $tables = document.querySelectorAll('.js-table')
  $addItemBtns = document.querySelectorAll('.js-btn-add-item')
  $addItemModals = document.querySelectorAll('.js-modal-add-item')

  model = new SeniorModel()

  for $table in $tables
    new TableView(model, $table)
  for $addItemBtn in $addItemBtns
    new AddItemBtnView(model, $addItemBtn)
  for $addItemModal in $addItemModals
    new AddItemModalView(model, $addItemModal)
