(function() {
  var AddItemModalView, MicroView,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  MicroView = microModule["import"]('MicroView');

  AddItemModalView = (function(superClass) {
    extend(AddItemModalView, superClass);

    function AddItemModalView($el, model) {
      this.$el = $el;
      this.model = model;
      this.$addItemSubmitBtn = this.find('.js-btn-add-item-submit');
      this.$itemNameInput = this.find('.js-input-add-item-name');
      this.$itemAmountInput = this.find('.js-input-add-item-amount');
      AddItemModalView.__super__.constructor.call(this);
    }

    AddItemModalView.prototype.setEventListeners = function() {
      this.model.onChange('isShowModal', (function(_this) {
        return function() {
          var isShowModal;
          isShowModal = _this.model.get('isShowModal');
          if (isShowModal) {
            return _this.show();
          } else {
            return _this.hide();
          }
        };
      })(this));
      return this.on(this.$addItemSubmitBtn, 'click', (function(_this) {
        return function() {
          return _this.addItem();
        };
      })(this));
    };

    AddItemModalView.prototype.show = function() {
      return this.addClass(this.$el, 'is-open');
    };

    AddItemModalView.prototype.hide = function() {
      return this.removeClass(this.$el, 'is-open');
    };

    AddItemModalView.prototype.addItem = function() {
      var amount, item, name;
      name = this.value(this.$itemNameInput);
      amount = this.value(this.$itemAmountInput);
      item = {
        name: name,
        amount: amount
      };
      this.model.addData(item);
      return this.model.set('isShowModal', false);
    };

    return AddItemModalView;

  })(MicroView);

  microModule["export"](AddItemModalView);

}).call(this);
