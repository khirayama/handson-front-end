import Step2 from './Step2.es6';

export default class FetchBtn {
  constructor($el) {
    this.$el = $el;
    this.setEventListeners();
  }
  setEventListeners() {
    this.$el.addEventListener('click', () => {
      Step2.state.fetch();
    });
  }
}
