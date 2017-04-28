import { expect } from 'chai';
import Mask from '../src/Mask';

describe('Mask', () => {

  describe('phone', () => {

    const mask = new Mask();

    it('should return complete phone formatted', () => {
      const masked = mask.build('2222222222', 'phone');
      expect(masked).to.be.equal('(22)2222-2222');
    });
    it('should return complete phone formatted with sequence and limit characters', () => {
      const masked = mask.build('1234567891234567', 'phone');
      expect(masked).to.be.equal('(12)3456-7891');
    });
    it('should return complete phone formatted with parameters letters and numbers randomly interspersed', () => {
      const masked = mask.build('1A2A5N52D26DAS51DKD581D2K12', 'phone');
      expect(masked).to.be.equal('(12)5522-6515');
    });
    it('should return partial phone with placehold(underscore) complete formatted with parameters letters and numbers randomly interspersed', () => {
      const masked = mask.build('1DSA11A', 'phone', '_');
      expect(masked).to.be.equal('(11)1___-____');
    });
    it('should return partial phone formatted', () => {
      const masked = mask.build('1111', 'phone');
      expect(masked).to.be.equal('(11)11');
    });
    it('should return partial phone formatted with placehold(space)', () => {
      const masked = mask.build('111', 'phone', ' ');
      expect(masked).to.be.equal('(11)1   -    ');
    });
    it('should return placehold(underscore) complete phone formatted', () => {
      const masked = mask.build('', 'phone', '_');
      expect(masked).to.be.equal('(__)____-____');
    });
  });
});
