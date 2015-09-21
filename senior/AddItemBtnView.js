(function() {
  this.AddItemBtnView = (function() {
    function AddItemBtnView($el, model) {
      this.$el = $el;
      this.model = model;
      this.setEventListeners();
    }

    AddItemBtnView.prototype.setEventListeners = function() {
      return this.$el.addEventListener('click', (function(_this) {
        return function() {
          return _this.model.toggleIsModalShowing();
        };
      })(this));
    };

    return AddItemBtnView;

  })();

}).call(this);
