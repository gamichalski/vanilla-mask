'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Mask = (function (value, mask) {
  value = String(value);
  var text = '';
  var specialCharacter = 0;

  for (var index = 0, indexAux = 1; indexAux && index < mask.length; index += 1) {
    var character = value.charAt(index);
    var maskCharacter = mask.charAt(index + specialCharacter);

    switch (maskCharacter) {
      case '#':
        if (/\d/.test(character)) {
          text += character;
        } else {
          indexAux = 0;
        }break;
      case 'A':
        if (/[a-z]/i.test(character)) {
          text += character;
        } else {
          indexAux = 0;
        }break;
      case 'N':
        if (/[a-z0-9]/i.test(character)) {
          text += character;
        } else {
          indexAux = 0;
        }break;
      case 'X':
        text += character;break;
      default:
        if (character) {
          text += maskCharacter;
          if (maskCharacter !== character) {
            text += character;
            specialCharacter += 1;
          }
        }
        break;
    }
  }

  return text;
});

exports.Mask = Mask;
//# sourceMappingURL=index.js.map
