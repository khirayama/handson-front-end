do ->
  $tables = document.querySelectorAll('.js-table')
  $addItemBtns = document.querySelectorAll('.js-btn-add-item')
  $addItemModals = document.querySelectorAll('.js-modal-add-item')

  model = new SeniorModel()

  for $table in $tables
    new TableView($table, model)
  for $addItemBtn in $addItemBtns
    new AddItemBtnView($addItemBtn, model)
  for $addItemModal in $addItemModals
    new AddItemModalView($addItemModal, model)
