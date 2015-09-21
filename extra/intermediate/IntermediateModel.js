(function() {
  var IntermediateModel, MicroModel,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  MicroModel = microModule["import"]('MicroModel');

  IntermediateModel = (function(superClass) {
    extend(IntermediateModel, superClass);

    function IntermediateModel() {
      this.data = [];
      this.fetch();
    }

    IntermediateModel.prototype.fetch = function() {
      return setTimeout((function(_this) {
        return function() {
          var res;
          res = _this.genData();
          return _this.set('data', res);
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

  })(MicroModel);

  microModule["export"](IntermediateModel);

}).call(this);
