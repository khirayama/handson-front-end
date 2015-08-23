function FetchBtn($el) {
  this.$el = $el;
  this.init();
}
FetchBtn.prototype.init = function () {
  this.setEventListeners();
};
FetchBtn.prototype.setEventListeners = function () {
  this.$el.addEventListener('click', function () {
    Step2.state.fetch();
  });
};

