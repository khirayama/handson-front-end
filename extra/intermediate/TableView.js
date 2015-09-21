(function() {
  var MicroView, TableView,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  MicroView = microModule["import"]('MicroView');

  TableView = (function(superClass) {
    extend(TableView, superClass);

    function TableView($el, model) {
      this.$el = $el;
      this.model = model;
      this._sortByKey = bind(this._sortByKey, this);
      this._data = this.model.get('data');
      this._reverse = false;
      this.$tbody = this.find('.js-tbody');
      this.$sortBtns = this.find('.js-btn-sort');
      this.render();
      TableView.__super__.constructor.call(this);
    }

    TableView.prototype.setEventListeners = function() {
      this.model.onChange('data', (function(_this) {
        return function() {
          _this._data = _this.model.get('data');
          return _this.render();
        };
      })(this));
      return this.on(this.$sortBtns, 'click', (function(_this) {
        return function(e) {
          var sortkey;
          sortkey = _this.data(e.target, 'sortkey');
          _this._sortByKey(sortkey);
          return _this.render();
        };
      })(this));
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
      return this.html(this.$tbody, tableEl.join(''));
    };

    return TableView;

  })(MicroView);

  microModule["export"](TableView);

}).call(this);
