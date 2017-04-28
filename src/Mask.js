import config from './locale/pt-BR';

class Mask {

  constructor() {
    this.config = config;
  }

  build(text, format, defaultValue = '') {
    const regexp = this.config[format];
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
          formated.push(defaultValue);
        }
      } else if (chars[indexChars + 1] || defaultValue) {
        formated.push(regexp[index]);
        indexChars -= 1;
      }
    }
    return formated.join('');
  }
}

export default Mask;
