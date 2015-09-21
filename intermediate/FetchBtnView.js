(function() {
  this.FetchBtnView = (function() {
    function FetchBtnView($el, model) {
      this.$el = $el;
      this.model = model;
      this.setEventListeners();
    }

    FetchBtnView.prototype.setEventListeners = function() {
      return this.$el.addEventListener('click', (function(_this) {
        return function() {
          return _this.model.fetch();
        };
      })(this));
    };

    return FetchBtnView;

  })();

}).call(this);
