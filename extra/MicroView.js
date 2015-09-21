(function() {
  var MicroView;

  MicroView = (function() {
    function MicroView() {
      this.setEventListeners();
    }

    MicroView.prototype.setEventListeners = function() {};

    MicroView.render = function(viewClass, $el, args) {
      var _$el, createClass, i, len, results;
      args = args || [];
      createClass = function(_args) {
        return viewClass.apply(this, _args);
      };
      createClass.prototype = viewClass.prototype;
      if (this.prototype._isDOMCollection($el)) {
        results = [];
        for (i = 0, len = $el.length; i < len; i++) {
          _$el = $el[i];
          args.splice(0, 0, _$el);
          results.push(new createClass(args));
        }
        return results;
      } else if (this.prototype._isDOM($el)) {
        args.splice(0, 0, $el);
        return new createClass($args);
      } else if (this.prototype._isSelector($el)) {
        _$el = this.find($el);
        return this.render(viewClass, _$el, args);
      }
    };

    MicroView.prototype.on = function($el, eventType, callback) {
      var _$el, i, len, results;
      if (this._isDOMCollection($el)) {
        results = [];
        for (i = 0, len = $el.length; i < len; i++) {
          _$el = $el[i];
          results.push(_$el.addEventListener(eventType, callback));
        }
        return results;
      } else if (this._isDOM($el)) {
        return $el.addEventListener(eventType, callback);
      } else if (this._isSelector($el)) {
        _$el = this.$el.querySelectorAll($el);
        return this.on(_$el, eventType, callback);
      }
    };

    MicroView.find = function(selector) {
      return this.prototype.find(selector);
    };

    MicroView.prototype.find = function(selector) {
      var $root;
      $root = this.$el || document;
      return $root.querySelectorAll(selector);
    };

    MicroView.prototype.html = function($el, html) {
      var _$el, i, len, results;
      if (this._isDOMCollection($el)) {
        results = [];
        for (i = 0, len = $el.length; i < len; i++) {
          _$el = $el[i];
          results.push(_$el.innerHTML = html);
        }
        return results;
      } else if (this._isDOM($el)) {
        return $el.innerHTML = html;
      } else if (this._isSelector($el)) {
        _$el = this.$el.querySelectorAll($el);
        return this.html(_$el, className);
      }
    };

    MicroView.prototype.data = function($el, key) {
      return $el.dataset[key];
    };

    MicroView.prototype.value = function($el) {
      var _$el;
      if (this._isDOMCollection($el)) {
        return $el[0].value;
      } else if (this._isDOM($el)) {
        return $el.value;
      } else if (this._isSelector($el)) {
        _$el = this.$el.querySelectorAll($el);
        return this.value(_$el, className);
      }
    };

    MicroView.prototype.addClass = function($el, className) {
      var _$el, i, len, results;
      if (this._isDOMCollection($el)) {
        results = [];
        for (i = 0, len = $el.length; i < len; i++) {
          _$el = $el[i];
          results.push(_$el.classList.add(className));
        }
        return results;
      } else if (this._isDOM($el)) {
        return $el.classList.add(className);
      } else if (this._isSelector($el)) {
        _$el = this.$el.querySelectorAll($el);
        return this.addClass(_$el, className);
      }
    };

    MicroView.prototype.removeClass = function($el, className) {
      var _$el, i, len, results;
      if (this._isDOMCollection($el)) {
        results = [];
        for (i = 0, len = $el.length; i < len; i++) {
          _$el = $el[i];
          results.push(_$el.classList.remove(className));
        }
        return results;
      } else if (this._isDOM($el)) {
        return $el.classList.remove(className);
      } else if (this._isSelector($el)) {
        _$el = this.$el.querySelectorAll($el);
        return this.addClass(_$el, className);
      }
    };

    MicroView.prototype._isDOMCollection = function($el) {
      if (typeof $el === 'object' && $el.length) {
        return true;
      }
      return false;
    };

    MicroView.prototype._isDOM = function($el) {
      if (typeof $el === 'object' && !$el.length) {
        return true;
      }
      return false;
    };

    MicroView.prototype._isSelector = function($el) {
      if (typeof $el === 'string') {
        return true;
      }
      return false;
    };

    return MicroView;

  })();

  if (microModule) {
    microModule["export"](MicroView);
  } else {
    window.Micro = Micro || {};
    window.Micro.View = MicroView;
  }

}).call(this);
