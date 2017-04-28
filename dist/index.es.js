import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';

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

export { Mask };
//# sourceMappingURL=index.es.js.map
