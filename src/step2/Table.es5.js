function Table($el) {
  this.$el = $el;
  this.$tbody = this.$el.querySelector('.js-tbody');
  this.$sortBtns = this.$el.querySelectorAll('.js-sort-btn');
  this.init();
}
Table.prototype.init = function () {
  this.render();
  this.setEventListeners();
};
Table.prototype.setEventListeners = function () {
  var i, $sortBnt, sortkey;
  var _this = this;

  Step2.state.onChange('tableData', function () {
    _this.render();
  });

  for (i = 0; i < this.$sortBtns.length; i++) {
    $sortBtn = this.$sortBtns[i];
    $sortBtn.addEventListener('click', function () {
      sortkey = this.dataset.sortkey;
      Step2.state.sortByKey(sortkey);
      _this.render();
    });
  }
};
Table.prototype.addComma = function (num) {
  return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
};
Table.prototype.template = function (data) {
  return '<tr><td>' + data.name + '</td><td>' + this.addComma(data.amount) + '</td></tr>';
};
Table.prototype.render = function () {
  var i;
  var tableData = Step2.state.get('tableData');
  var tableEl = [];

  for (i = 0; i < tableData.length; i++) {
    tableEl.push(this.template(tableData[i]));
  }
  this.$tbody.innerHTML = tableEl.join('');
};
