import { expect } from 'chai';
import Mask from '../src/Mask';

describe('Mask', () => {

  describe('build with number parameters', () => {

    const mask = new Mask();

    it('should return number phone formatted', () => {
      const masked = mask.build('9999999999', 'phone');
      expect(masked).to.be.equal('(99)9999-9999');
    });
    it('should return inpletnumber phone formatted not specified default value ', () => {
      const masked = mask.build('999999', 'phone');
      expect(masked).to.be.equal('(99)9999');
    });
    it('should return number phone formatted not completed and with spaces', () => {
      const masked = mask.build('9999', 'phone', ' ');
      expect(masked).to.be.equal('(99)99  -    ');
    });
    it('should return number phone formatted not completed and with underscore', () => {
      const masked = mask.build('999999', 'phone', '_');
      expect(masked).to.be.equal('(99)9999-____');
    });
  });

  describe('build with number parameters', () => {

    const mask = new Mask();

    it('should return inpletnumber phone formatted with others caracters ', () => {
      const masked = mask.build('9A9A9A9A9A9A', 'phone');
      expect(masked).to.be.equal('(99)9999-');
    });
    it('should return inpletnumber phone formatted with others caracters init not number ', () => {
      const masked = mask.build('A9A9A9A9A9A9A', 'phone');
      expect(masked).to.be.equal('(99)9999-');
    });
  });
});
