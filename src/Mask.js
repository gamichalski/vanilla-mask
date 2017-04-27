import config from './config';

class Mask {

  constructor(mask) {
    this.mask = mask;
    this.config = config;
  }

  exec(text) {
    return text.replace(/^\+?([0-9]{2})([0-9]{4})([0-9]{4})$/, '($1)$2-$3');
  }
  build(text, format, defaultValue = '') {
    const regexp = this.config[format];
    const chars = text.split('');

    let aux = 0;
    const formated = regexp.map((val, index) => {
      if (val instanceof RegExp) {
        const isValid = val.test(chars[index + aux]);
        if (!isValid && chars[index + aux]) {
          chars.splice(index + aux, 1);
        }
        return chars[index + aux] || defaultValue;
      }
      const value = !defaultValue && !chars[index + aux] ? '' : val;
      aux -= 1;
      return value;
    }).join('');
    return formated;
  }
}

export default Mask;
