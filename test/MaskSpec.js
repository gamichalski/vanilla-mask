import { expect } from 'chai';
import Mask from '../src/Mask';

describe('Mask', () => {

  describe('Mask()', () => {

    it('should return number formatted for a guest user', () => {
      const masked = Mask('9999999999', '(##)####-####');
      expect(masked).to.be.equal('(99)9999-9999');
    });
    it('should return number formatted for a guest user', () => {
      const masked = Mask('123465', '###');
      expect(masked).to.be.equal('123');
    });
  });

});
