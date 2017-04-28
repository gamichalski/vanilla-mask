import { expect } from 'chai';
import Mask from '../src/Mask';

describe('Mask', () => {

  describe('time', () => {

    const mask = new Mask();

    it('should return complete time formatted', () => {
      const masked = mask.build('111111', 'time');
      expect(masked).to.be.equal('11:11:11');
    });
    it('should return complete time formatted with sequence and limit characters', () => {
      const masked = mask.build('123456789', 'time');
      expect(masked).to.be.equal('12:34:56');
    });
    it('should return complete date formatted with parameters letters and numbers randomly interspersed', () => {
      const masked = mask.build('1A2A5NDK2K12', 'time');
      expect(masked).to.be.equal('12:52:12');
    });
    it('should return partial time with placehold(underscore) complete formatted with parameters letters and numbers randomly interspersed', () => {
      const masked = mask.build('1DSA11A', 'time', '_');
      expect(masked).to.be.equal('11:1_:__');
    });
    it('should return partial time formatted', () => {
      const masked = mask.build('1111', 'time');
      expect(masked).to.be.equal('11:11');
    });
    it('should return partial time formatted with placehold(space)', () => {
      const masked = mask.build('111', 'time', ' ');
      expect(masked).to.be.equal('11:1 :  ');
    });
    it('should return placehold(underscore) complete time formatted', () => {
      const masked = mask.build('', 'time', '_');
      expect(masked).to.be.equal('__:__:__');
    });
  });
});
