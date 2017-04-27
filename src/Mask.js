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
    let aux = 0;
    const formated = regexp.map((val, index) => {
      if (val instanceof RegExp) {
        return text[index + aux] || defaultValue;
      }
      const value = !defaultValue && !text[index + aux] ? '' : val;
      aux -= 1;
      return value;
    }).join('');
    return formated;
  }
}

export default Mask;
