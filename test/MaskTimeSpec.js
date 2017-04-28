import { expect } from 'chai';
import Mask from '../src/Mask';
import config from './config/default';

describe('Mask', () => {

  describe('time with type', () => {

    const mask = new Mask(config);

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

  describe('time with string format', () => {

    const mask = new Mask(config);

    it('should return complete time formatted', () => {
      const masked = mask.exec('111111', '##:##:##');
      expect(masked).to.be.equal('11:11:11');
    });
    it('should return complete time formatted with sequence and limit characters', () => {
      const masked = mask.exec('123456789', '##:##:##');
      expect(masked).to.be.equal('12:34:56');
    });
    it('should return complete date formatted with parameters letters and numbers randomly interspersed', () => {
      const masked = mask.exec('1A2A5NDK2K12', '##:##:##');
      expect(masked).to.be.equal('12:52:12');
    });
    it('should return partial time with placehold(underscore) complete formatted with parameters letters and numbers randomly interspersed', () => {
      const masked = mask.exec('1DSA11A', '##:##:##', '_');
      expect(masked).to.be.equal('11:1_:__');
    });
    it('should return partial time formatted', () => {
      const masked = mask.exec('1111', '##:##:##');
      expect(masked).to.be.equal('11:11');
    });
    it('should return partial time formatted with placehold(space)', () => {
      const masked = mask.exec('111', '##:##:##', ' ');
      expect(masked).to.be.equal('11:1 :  ');
    });
    it('should return placehold(underscore) complete time formatted', () => {
      const masked = mask.exec('', '##:##:##', '_');
      expect(masked).to.be.equal('__:__:__');
    });
  });
});
