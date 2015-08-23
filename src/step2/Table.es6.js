import Step2 from './Step2.es6';

export default class Table {
  constructor($el) {
    this.$el = $el;
    this.$tbody = this.$el.querySelector('.js-tbody');
    this.$sortBtns = this.$el.querySelectorAll('.js-sort-btn');
    this.render();
    this.setEventListeners();
  }
  setEventListeners() {
    let i, $sortBtn, sortkey;
    let self = this;

    Step2.state.onChange('tableData', () => {
      self.render();
    });

    for (i = 0; i < this.$sortBtns.length; i++) {
      $sortBtn = this.$sortBtns[i];
      $sortBtn.addEventListener('click', function () {
        sortkey = this.dataset.sortkey;
        Step2.state.sortByKey(sortkey);
        self.render();
      });
    }
  }
  addComma(num) {
    return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  }
  template(data) {
    return `<tr><td>${data.name}</td><td>${this.addComma(data.amount)}</td></tr>`;
  }
  render() {
    let i;
    let tableData = Step2.state.get('tableData');
    let tableEl = [];

    for (i = 0; i < tableData.length; i++) {
      tableEl.push(this.template(tableData[i]));
    }
    this.$tbody.innerHTML = tableEl.join('');
  }
}
