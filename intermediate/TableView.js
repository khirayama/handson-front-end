(function() {
  this.TableView = (function() {
    function TableView($el, model) {
      this.$el = $el;
      this.model = model;
      this._data = this.model.getData();
      this._reverse = false;
      this.$tbody = this.$el.querySelector('.js-tbody');
      this.$sortBtns = this.$el.querySelectorAll('.js-btn-sort');
      this.render();
      this.setEventListeners();
    }

    TableView.prototype.setEventListeners = function() {
      var $sortBtn, i, len, ref, results;
      this.model.onChangeData((function(_this) {
        return function() {
          _this._data = _this.model.getData();
          return _this.render();
        };
      })(this));
      ref = this.$sortBtns;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        $sortBtn = ref[i];
        results.push($sortBtn.addEventListener('click', (function(_this) {
          return function(e) {
            var sortkey;
            sortkey = e.target.dataset.sortkey;
            _this._sortByKey(sortkey);
            return _this.render();
          };
        })(this)));
      }
      return results;
    };

    TableView.prototype.addComma = function(num) {
      return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    };

    TableView.prototype.template = function(data) {
      return "<tr><td>" + data.name + "</td><td>" + (this.addComma(data.amount)) + "</td></tr>";
    };

    TableView.prototype._sortByKey = function(key) {
      this._reverse = !this._reverse;
      return this._data.sort((function(_this) {
        return function(a, b) {
          var x, y;
          x = a[key];
          y = b[key];
          if (_this._reverse) {
            if (x > y) {
              return 1;
            }
            if (x < y) {
              return -1;
            }
            return 0;
          } else {
            if (x > y) {
              return -1;
            }
            if (x < y) {
              return 1;
            }
            return 0;
          }
        };
      })(this));
    };

    TableView.prototype.render = function() {
      var data, i, len, ref, tableEl;
      tableEl = [];
      ref = this._data;
      for (i = 0, len = ref.length; i < len; i++) {
        data = ref[i];
        tableEl.push(this.template(data));
      }
      return this.$tbody.innerHTML = tableEl.join('');
    };

    return TableView;

  })();

}).call(this);
