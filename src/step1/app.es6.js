class Tab {
  constructor($el) {
    this.index = 0;
    this.$el = $el;
    this.$btns = $el.querySelectorAll('.js-tab-btn');
    this.$contents = $el.querySelectorAll('.js-tab-content');
    this.showContent();
    this.setEventListeners();
  }
  setEventListeners() {
    for (let i = 0; i < this.$btns.length; i++) {
      let $btn = this.$btns[i];
      $btn.addEventListener('click', () => {
        this.index = i;
        this.showContent();
      });
    }
  }
  showContent() {
    for (let i = 0; i < this.$contents.length; i++) {
      let $content = this.$contents[i];
      if (this.index === i) {
        $content.style.display = 'block';
      } else {
        $content.style.display = 'none';
      }
    }
  }
}

(() => {
  let $tab = document.querySelector('.tab');
  new Tab($tab);
})();
