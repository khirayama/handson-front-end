function Tab($el) {
  this.index = 0;
  this.$el = $el;
  this.$btns = $el.querySelectorAll('.js-tab-btn');
  this.$contents = $el.querySelectorAll('.js-tab-content');
  this.init();
}
Tab.prototype.init = function () {
  this.showContent();
  this.setEventListeners();
};
Tab.prototype.setEventListeners = function () {
  var i, $btn;
  var _this = this;

  for (i = 0; i < this.$btns.length; i++) {
    $btn = this.$btns[i];
    $btn.dataset.index = i;
    $btn.addEventListener('click', function () {
      _this.index = +this.dataset.index;
      _this.showContent();
    });
  }
};
Tab.prototype.showContent = function () {
  var i, $content;

  for (i = 0; i < this.$contents.length; i++) {
    $content = this.$contents[i];
    if (this.index === i) {
      $content.style.display = 'block';
    } else {
      $content.style.display = 'none';
    }
  }
};

(function () {
  var $tab = document.querySelector('.tab');
  new Tab($tab);
})();
