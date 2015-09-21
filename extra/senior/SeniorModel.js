(function() {
  var MicroModel, SeniorModel,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  MicroModel = microModule["import"]('MicroModel');

  SeniorModel = (function(superClass) {
    extend(SeniorModel, superClass);

    function SeniorModel() {
      this.isShowModal = false;
      this.data = [
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

    SeniorModel.prototype.addData = function(item) {
      this.data.push(item);
      return this.set('data', this.data);
    };

    return SeniorModel;

  })(MicroModel);

  microModule["export"](SeniorModel);

}).call(this);
