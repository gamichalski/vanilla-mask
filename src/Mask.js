class Mask {

  constructor(config) {
    this.config = config;
  }

  exec(text, mask, placeholder) {
    const chars = mask.split('');
    const regexp = [];

    for (let index = 0; index < chars.length; index += 1) {
      switch (chars[index]) {
        case '#' : regexp.push(/\d/); break;
        case 'A' : regexp.push(/[a-z]/i); break;
        case 'N' : regexp.push(/[a-z0-9]/i); break;
        default : regexp.push(chars[index]); break;
      }
    }
    return this.build(text, regexp, placeholder);
  }

  build(text, mask, placeholder = '', debug = false) {
    const regexp = Array.isArray(mask) ? mask : this.config[mask];
    const chars = text.split('');
    const formated = [];

    for (let index = 0, indexChars = 0; index < regexp.length; index += 1, indexChars += 1) {
      if (regexp[index] instanceof RegExp) {
        const isValid = regexp[index].test(chars[indexChars]);
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
}

export default Mask;
