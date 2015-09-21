(function() {
  this.IntermediateModel = (function() {
    function IntermediateModel() {
      this._events = {};
      this._data = [];
      this.fetch();
    }

    IntermediateModel.prototype.getData = function() {
      return this._data;
    };

    IntermediateModel.prototype.setData = function(value) {
      return this._data = value;
    };

    IntermediateModel.prototype.emit = function(eventName) {
      var callback, i, len, ref, results;
      ref = this._events[eventName];
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        callback = ref[i];
        results.push(callback());
      }
      return results;
    };

    IntermediateModel.prototype.onChangeData = function(callback) {
      this._events['change_data'] = this._events['change_data'] || [];
      return this._events['change_data'].push(callback);
    };

    IntermediateModel.prototype.fetch = function() {
      return setTimeout((function(_this) {
        return function() {
          var res;
          res = _this.genData();
          _this.setData(res);
          return _this.emit('change_data');
        };
      })(this), 300);
    };

    IntermediateModel.prototype.genData = function() {
      var allData;
      allData = [
        {
          name: 'AAA',
          amount: 3000
        }, {
          name: 'BBB',
          amount: 1000
        }, {
          name: 'CCC',
          amount: 2000
        }, {
          name: 'DDD',
          amount: 5000
        }, {
          name: 'EEE',
          amount: 10000
        }, {
          name: 'FFF',
          amount: 1000
        }, {
          name: 'GGG',
          amount: 3000
        }, {
          name: 'HHH',
          amount: 1000
        }, {
          name: 'III',
          amount: 2000
        }, {
          name: 'JJJ',
          amount: 5000
        }, {
          name: 'KKK',
          amount: 10000
        }
      ];
      allData.sort(function(x, y) {
        return Math.random() - Math.random();
      });
      return allData.slice(0, 5);
    };

    return IntermediateModel;

  })();

}).call(this);
