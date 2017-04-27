import { expect } from 'chai';
import Mask from '../src/Mask';

describe('Mask', () => {

  describe('Mask()', () => {

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

});
