(function() {
  var AddItemBtnView, MicroView,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  MicroView = microModule["import"]('MicroView');

  AddItemBtnView = (function(superClass) {
    extend(AddItemBtnView, superClass);

    function AddItemBtnView($el, model) {
      this.$el = $el;
      this.model = model;
      AddItemBtnView.__super__.constructor.call(this);
    }

    AddItemBtnView.prototype.setEventListeners = function() {
      return this.on(this.$el, 'click', (function(_this) {
        return function() {
          return _this.model.set('isShowModal', true);
        };
      })(this));
    };

    return AddItemBtnView;

  })(MicroView);

  microModule["export"](AddItemBtnView);

}).call(this);
