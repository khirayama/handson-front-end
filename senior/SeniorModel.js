(function() {
  this.SeniorModel = (function() {
    function SeniorModel() {
      this._events = {};
      this._isModalShowing = false;
      this._data = [
        {
          name: 'AAA',
          amount: 2000
        }, {
          name: 'BBB',
          amount: 10
        }, {
          name: 'CCC',
          amount: 10000
        }
      ];
    }

    SeniorModel.prototype.getData = function() {
      return this._data;
    };

    SeniorModel.prototype.setData = function(value) {
      return this._data = value;
    };

    SeniorModel.prototype.getIsModalShowing = function() {
      return this._isModalShowing;
    };

    SeniorModel.prototype.toggleIsModalShowing = function() {
      this._isModalShowing = !this._isModalShowing;
      return this.emit('change_isModalShowing');
    };

    SeniorModel.prototype.emit = function(eventName) {
      var callback, i, len, ref, results;
      ref = this._events[eventName];
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        callback = ref[i];
        results.push(callback());
      }
      return results;
    };

    SeniorModel.prototype.onChangeData = function(callback) {
      this._events['change_data'] = this._events['change_data'] || [];
      return this._events['change_data'].push(callback);
    };

    SeniorModel.prototype.onChangeIsModalShowing = function(callback) {
      this._events['change_isModalShowing'] = this._events['change_isModalShowing'] || [];
      return this._events['change_isModalShowing'].push(callback);
    };

    SeniorModel.prototype.addData = function(item) {
      this._data.push(item);
      return this.emit('change_data');
    };

    return SeniorModel;

  })();

}).call(this);
