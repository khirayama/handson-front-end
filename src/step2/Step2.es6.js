class Step2 {
  constructor() {
    this.tableData = [
      {name: 'AAA', amount: 3000},
      {name: 'BBB', amount: 1000},
      {name: 'CCC', amount: 2000}
    ];
    this._events = {};
  }
  get(key) {
    return this[key];
  }
  set(key, value, silent) {
    this[key] = value;
    if (!this._events[key] || silent) return;
    for (let i = 0; i < this._events[key].length; i++) {
      (this._events[key][i])();
    }
  }
  onChange(key, callback) {
    this._events[key] = this._events[key] || [];
    this._events[key].push(callback);
  }
  sortByKey(key) {
    this.tableData.sort((a, b) => {
      let x = a[key];
      let y = b[key];

      if (x > y) return 1;
      if (x < y) return -1;
      return 0;
    });
  }
  fetch() {
    setTimeout(() => {
      let res = [
        {name: 'DDD', amount: 5000},
        {name: 'EEE', amount: 10000},
        {name: 'FFF', amount: 1000}
      ];
      this.set('tableData', res);
    }, 300);
  }
}
export default new Step2;
