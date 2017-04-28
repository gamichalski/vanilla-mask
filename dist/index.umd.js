(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('babel-runtime/helpers/classCallCheck'), require('babel-runtime/helpers/createClass')) :
  typeof define === 'function' && define.amd ? define(['exports', 'babel-runtime/helpers/classCallCheck', 'babel-runtime/helpers/createClass'], factory) :
  (factory((global.vanilla-mask = global.vanilla-mask || {}),global._classCallCheck,global._createClass));
}(this, (function (exports,_classCallCheck,_createClass) { 'use strict';

_classCallCheck = 'default' in _classCallCheck ? _classCallCheck['default'] : _classCallCheck;
_createClass = 'default' in _createClass ? _createClass['default'] : _createClass;

var Mask = function () {
  function Mask(config) {
    _classCallCheck(this, Mask);

    this.config = config;
  }

  _createClass(Mask, [{
    key: 'exec',
    value: function exec(text, mask, placeholder) {
      var chars = mask.split('');
      var regexp = [];

      for (var index = 0; index < chars.length; index += 1) {
        switch (chars[index]) {
          case '#':
            regexp.push(/\d/);break;
          case 'A':
            regexp.push(/[a-z]/i);break;
          case 'N':
            regexp.push(/[a-z0-9]/i);break;
          default:
            regexp.push(chars[index]);break;
        }
      }
      return this.build(text, regexp, placeholder);
    }
  }, {
    key: 'build',
    value: function build(text, mask) {
      var placeholder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      var regexp = Array.isArray(mask) ? mask : this.config[mask];
      var chars = text.split('');
      var formated = [];

      for (var index = 0, indexChars = 0; index < regexp.length; index += 1, indexChars += 1) {
        if (regexp[index] instanceof RegExp) {
          var isValid = regexp[index].test(chars[indexChars]);
          if (isValid && chars[indexChars]) {
            formated.push(chars[indexChars]);
          } else if (chars[indexChars]) {
            index -= 1;
          } else {
            formated.push(placeholder);
          }
        } else if (chars[indexChars] || placeholder) {
          formated.push(regexp[index]);
          indexChars -= 1;
        }
      }
      return formated.join('');
    }
  }]);

  return Mask;
}();

exports.Mask = Mask;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
