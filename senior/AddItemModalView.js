(function() {
  this.AddItemModalView = (function() {
    function AddItemModalView($el, model) {
      this.$el = $el;
      this.model = model;
      this.$addItemSubmitBtn = this.$el.querySelector('.js-btn-add-item-submit');
      this.$itemNameInput = this.$el.querySelector('.js-input-add-item-name');
      this.$itemAmountInput = this.$el.querySelector('.js-input-add-item-amount');
      this.setEventListeners();
    }

    AddItemModalView.prototype.setEventListeners = function() {
      this.model.onChangeIsModalShowing((function(_this) {
        return function() {
          var isModalShowing;
          isModalShowing = _this.model.getIsModalShowing();
          if (isModalShowing) {
            return _this.show();
          } else {
            return _this.hide();
          }
        };
      })(this));
      return this.$addItemSubmitBtn.addEventListener('click', (function(_this) {
        return function() {
          return _this.addItem();
        };
      })(this));
    };

    AddItemModalView.prototype.show = function() {
      return this.$el.classList.add('is-open');
    };

    AddItemModalView.prototype.hide = function() {
      return this.$el.classList.remove('is-open');
    };

    AddItemModalView.prototype.addItem = function() {
      var amount, item, name;
      name = this.$itemNameInput.value;
      amount = this.$itemAmountInput.value;
      item = {
        name: name,
        amount: amount
      };
      this.model.addData(item);
      return this.model.toggleIsModalShowing();
    };

    return AddItemModalView;

  })();

}).call(this);
