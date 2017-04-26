export default (value, mask) => {
  value = String(value);
  let text = '';
  let specialCharacter = 0;

  for (let index = 0, indexAux = 1; indexAux && index < mask.length; index += 1) {
    const character = value.charAt(index);
    const maskCharacter = mask.charAt(index + specialCharacter);

    switch (maskCharacter) {
      case '#' : if (/\d/.test(character)) { text += character; } else { indexAux = 0; } break;
      case 'A' : if (/[a-z]/i.test(character)) { text += character; } else { indexAux = 0; } break;
      case 'N' : if (/[a-z0-9]/i.test(character)) { text += character; } else { indexAux = 0; } break;
      case 'X' : text += character; break;
      default :
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
};
