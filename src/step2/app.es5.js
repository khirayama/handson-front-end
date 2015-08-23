var Step2 = Step2 || {};

Step2.state = {
  tableData: [
    {name: 'AAA', amount: 3000},
    {name: 'BBB', amount: 1000},
    {name: 'CCC', amount: 2000}
  ],
  _events: {},
  get: function (key) {
    return this[key];
  },
  set: function (key, value, silent) {
    var i;

    this[key] = value;
    if (!this._events[key] || silent) return;
    for (i = 0; i < this._events[key].length; i++) {
      (this._events[key][i])();
    }
  },
  onChange: function (key, callback) {
    this._events[key] = this._events[key] || [];
    this._events[key].push(callback);
  },
  sortByKey: function (key) {
    this.tableData.sort(function (a, b) {
      var x = a[key];
      var y = b[key];

      if (x > y) return 1;
      if (x < y) return -1;
      return 0;
    });
  },
  fetch: function () {
    var self = this;

    setTimeout(function () {
      var res = [
        {name: 'DDD', amount: 5000},
        {name: 'EEE', amount: 10000},
        {name: 'FFF', amount: 1000}
      ];
      self.set('tableData', res);
    }, 300);
  },
  init: function () {
    this._events = {};
  }
};

(function () {
  var $table = document.querySelector('.js-table');
  var $fetchBtn = document.querySelector('.js-fetch-btn');

  Step2.state.init();
  new Table($table);
  new FetchBtn($fetchBtn);
})();
