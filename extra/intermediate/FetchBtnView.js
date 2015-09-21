(function() {
  var FetchBtnView, MicroView,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  MicroView = microModule["import"]('MicroView');

  FetchBtnView = (function(superClass) {
    extend(FetchBtnView, superClass);

    function FetchBtnView($el, model) {
      this.$el = $el;
      this.model = model;
      FetchBtnView.__super__.constructor.call(this);
    }

    FetchBtnView.prototype.setEventListeners = function() {
      return this.on(this.$el, 'click', (function(_this) {
        return function() {
          return _this.model.fetch();
        };
      })(this));
    };

    return FetchBtnView;

  })(MicroView);

  microModule["export"](FetchBtnView);

}).call(this);
