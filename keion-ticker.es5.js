'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KeionTicker = function () {
  _createClass(KeionTicker, [{
    key: 'reconfig',
    value: function reconfig(config) {
      this.config = config;
      this.textInner = this.config.el.querySelector('.kt-text-inner');

      var inner = config.el.querySelector('.kt-inner');
      var arr = this.constructor.Keions;
      var chosen = '';
      if (config.keion === 'random') {
        chosen = this.constructor.ImgRoot + arr[Math.floor(Math.random() * arr.length)] + '.png';
      } else if (arr.includes(config.keion)) {
        chosen = this.constructor.ImgRoot + config.keion + '.png';
      } else {
        chosen = config.keion;
      }

      var icon = inner.querySelector('.kt-icon');
      if (icon != null) {
        icon.style.backgroundImage = 'url(' + chosen + ')';
      } else {
        inner.insertAdjacentHTML('afterbegin', '<span class="kt-icon" style="background-image: url(' + chosen + ')"></span>');
      }

      var text = config.el.querySelector('.kt-text-inner');
      text.style.animationName = 'ticker';
      text.style.animationDuration = config.speed;
      text.style.animationIterationCount = 'infinite';
      text.innerHTML = config.msgs.join(config.separator);
    }
  }]);

  function KeionTicker(config) {
    _classCallCheck(this, KeionTicker);

    console.log('Starting a ticker with config:', config);

    var html = ['kt-outer', 'kt-inner', 'kt-text-outer', 'kt-text-inner'].reduceRight(function (acc, cur) {
      return '<div class="' + cur + '">' + acc + '</div>';
    }, '');
    config.el.innerHTML = html;

    this.reconfig(config);
  }

  _createClass(KeionTicker, [{
    key: 'start',
    value: function start() {
      this.textInner.style.animationPlayState = 'running';
    }
  }, {
    key: 'stop',
    value: function stop() {
      var el = this.config.el.querySelector('.kt-text-inner');
      var nel = el.cloneNode(true);
      el.parentNode.replaceChild(nel, el);
    }
  }, {
    key: 'pause',
    value: function pause() {
      this.textInner.style.animationPlayState = 'paused';
    }
  }, {
    key: 'change',
    value: function change(config) {
      for (var k in this.config) {
        if (typeof config[k] === 'undefined') config[k] = this.config[k];
      }console.log('Change a ticker with config:', config);

      this.reconfig(config);
    }
  }]);

  return KeionTicker;
}();

KeionTicker.Keions = ['azusa', 'mio', 'mugi', 'yui'];
KeionTicker.ImgRoot = 'img/';
