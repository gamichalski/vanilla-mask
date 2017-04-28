import { expect } from 'chai';
import Mask from '../src/Mask';

describe('Mask', () => {

  describe('zipcode', () => {

    const mask = new Mask();

    it('should return complete zipcode formatted', () => {
      const masked = mask.build('111111111', 'zipcode');
      expect(masked).to.be.equal('11111-111');
    });
    it('should return complete zipcode formatted with sequence and limit characters', () => {
      const masked = mask.build('123456789', 'zipcode');
      expect(masked).to.be.equal('12345-678');
    });
    it('should return complete date formatted with parameters letters and numbers randomly interspersed', () => {
      const masked = mask.build('1A2A5NDK25K142', 'zipcode');
      expect(masked).to.be.equal('12525-142');
    });
    it('should return partial zipcode with placehold(underscore) complete formatted with parameters letters and numbers randomly interspersed', () => {
      const masked = mask.build('1DSA11A', 'zipcode', '_');
      expect(masked).to.be.equal('111__-___');
    });
    it('should return partial zipcode formatted', () => {
      const masked = mask.build('1111', 'zipcode');
      expect(masked).to.be.equal('1111');
    });
    it('should return partial zipcode formatted with placehold(space)', () => {
      const masked = mask.build('111', 'zipcode', ' ');
      expect(masked).to.be.equal('111  -   ');
    });
    it('should return placehold(underscore) complete zipcode formatted', () => {
      const masked = mask.build('', 'zipcode', '_');
      expect(masked).to.be.equal('_____-___');
    });
  });
});
