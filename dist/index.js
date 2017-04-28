'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _classCallCheck = _interopDefault(require('babel-runtime/helpers/classCallCheck'));
var _createClass = _interopDefault(require('babel-runtime/helpers/createClass'));

var config = {
  cpf: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
  cnpj: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/],
  date: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  datetime: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/],
  phone: ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  time: [/\d/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/],
  zipcode: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]
};

var Mask = function () {
  function Mask() {
    _classCallCheck(this, Mask);

    this.config = config;
  }

  _createClass(Mask, [{
    key: 'build',
    value: function build(text, format) {
      var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      var regexp = this.config[format];
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
            formated.push(defaultValue);
          }
        } else if (chars[indexChars + 1] || defaultValue) {
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
//# sourceMappingURL=index.js.map
