import { expect } from 'chai';
import Mask from '../src/Mask';
import config from './config/default';

describe('Mask', () => {

  describe('date with type', () => {

    const mask = new Mask(config);

    it('should return complete date formatted', () => {
      const masked = mask.build('2222222222', 'date');
      expect(masked).to.be.equal('22/22/2222');
    });
    it('should return complete date formatted with sequence and limit characters', () => {
      const masked = mask.build('123456789', 'date');
      expect(masked).to.be.equal('12/34/5678');
    });
    it('should return complete date formatted with parameters letters and numbers randomly interspersed', () => {
      const masked = mask.build('1A2A5N52DK2K12', 'date');
      expect(masked).to.be.equal('12/55/2212');
    });
    it('should return partial date with placehold(underscore) complete formatted with parameters letters and numbers randomly interspersed', () => {
      const masked = mask.build('1DSA11A', 'date', '_');
      expect(masked).to.be.equal('11/1_/____');
    });
    it('should return partial date formatted', () => {
      const masked = mask.build('1111', 'date');
      expect(masked).to.be.equal('11/11');
    });
    it('should return partial date formatted with placehold(space)', () => {
      const masked = mask.build('111', 'date', ' ');
      expect(masked).to.be.equal('11/1 /    ');
    });
    it('should return placehold(underscore) complete date formatted', () => {
      const masked = mask.build('', 'date', '_');
      expect(masked).to.be.equal('__/__/____');
    });
  });

  describe('date with string format', () => {

    const mask = new Mask(config);

    it('should return complete date formatted', () => {
      const masked = mask.exec('2222222222', '##/##/####');
      expect(masked).to.be.equal('22/22/2222');
    });
    it('should return complete date formatted with sequence and limit characters', () => {
      const masked = mask.exec('123456789', '##/##/####');
      expect(masked).to.be.equal('12/34/5678');
    });
    it('should return complete date formatted with parameters letters and numbers randomly interspersed', () => {
      const masked = mask.exec('1A2A5N52DK2K12', '##/##/####');
      expect(masked).to.be.equal('12/55/2212');
    });
    it('should return partial date with placehold(underscore) complete formatted with parameters letters and numbers randomly interspersed', () => {
      const masked = mask.exec('1DSA11A', '##/##/####', '_');
      expect(masked).to.be.equal('11/1_/____');
    });
    it('should return partial date formatted', () => {
      const masked = mask.exec('1111', '##/##/####');
      expect(masked).to.be.equal('11/11');
    });
    it('should return partial date formatted with placehold(space)', () => {
      const masked = mask.exec('111', '##/##/####', ' ');
      expect(masked).to.be.equal('11/1 /    ');
    });
    it('should return placehold(underscore) complete date formatted', () => {
      const masked = mask.exec('', '##/##/####', '_');
      expect(masked).to.be.equal('__/__/____');
    });
  });
});
