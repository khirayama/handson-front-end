(function() {
  var MicroModel;

  MicroModel = (function() {
    var _events;

    function MicroModel() {}

    _events = {};

    MicroModel.prototype.get = function(key) {
      return this[key];
    };

    MicroModel.prototype.set = function(key, value, silent) {
      var callback, i, len, ref, results;
      this[key] = value;
      if (!_events[key] || silent) {
        return;
      }
      ref = _events[key];
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        callback = ref[i];
        results.push(callback());
      }
      return results;
    };

    MicroModel.prototype.onChange = function(key, callback) {
      _events[key] = _events[key] || [];
      return _events[key].push(callback);
    };

    return MicroModel;

  })();

  if (microModule) {
    microModule["export"](MicroModel);
  } else {
    window.Micro = Micro || {};
    window.Micro.Model = MicroModel;
  }

}).call(this);
