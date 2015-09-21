(function() {
  this.TabView = (function() {
    var index;

    index = 1;

    function TabView($el) {
      this.$el = $el;
      this.$btns = this.$el.querySelectorAll('.js-tab-btn');
      this.$contents = this.$el.querySelectorAll('.js-tab-content');
      this.toggleBtn();
      this.showContent();
      this.setEventListeners();
    }

    TabView.prototype.setEventListeners = function() {
      var $btn, i, j, len, ref, results;
      ref = this.$btns;
      results = [];
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        $btn = ref[i];
        $btn.dataset.index = i;
        results.push($btn.addEventListener('click', (function(_this) {
          return function(e) {
            index = +e.target.dataset.index;
            _this.toggleBtn();
            return _this.showContent();
          };
        })(this)));
      }
      return results;
    };

    TabView.prototype.toggleBtn = function() {
      var $btn, i, j, len, ref, results;
      ref = this.$btns;
      results = [];
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        $btn = ref[i];
        if (index === i) {
          results.push($btn.classList.add('is-active'));
        } else {
          results.push($btn.classList.remove('is-active'));
        }
      }
      return results;
    };

    TabView.prototype.showContent = function() {
      var $content, i, j, len, ref, results;
      ref = this.$contents;
      results = [];
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        $content = ref[i];
        if (index === i) {
          results.push($content.classList.add('is-active'));
        } else {
          results.push($content.classList.remove('is-active'));
        }
      }
      return results;
    };

    return TabView;

  })();

}).call(this);
