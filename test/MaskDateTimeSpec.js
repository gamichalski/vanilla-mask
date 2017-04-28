import { expect } from 'chai';
import Mask from '../src/Mask';
import config from './config/default';

describe('Mask', () => {

  describe('datetime with type', () => {

    const mask = new Mask(config);

    it('should return complete datetime formatted', () => {
      const masked = mask.build('2222222222', 'datetime');
      expect(masked).to.be.equal('22/22/2222 22');
    });
    it('should return complete datetime formatted with sequence and limit characters', () => {
      const masked = mask.build('123456789123456789', 'datetime');
      expect(masked).to.be.equal('12/34/5678 91:23:45');
    });
    it('should return complete datetime formatted with parameters letters and numbers randomly interspersed', () => {
      const masked = mask.build('1A2A5N52D26DAS51DKD581D2K12', 'datetime');
      expect(masked).to.be.equal('12/55/2265 15:81:21');
    });
    it('should return partial datetime with placehold(underscore) complete formatted with parameters letters and numbers randomly interspersed', () => {
      const masked = mask.build('1DSA11A', 'datetime', '_');
      expect(masked).to.be.equal('11/1_/____ __:__:__');
    });
    it('should return partial datetime formatted', () => {
      const masked = mask.build('1111', 'datetime');
      expect(masked).to.be.equal('11/11');
    });
    it('should return partial datetime formatted with placehold(space)', () => {
      const masked = mask.build('111', 'datetime', ' ');
      expect(masked).to.be.equal('11/1 /       :  :  ');
    });
    it('should return placehold(underscore) complete datetime formatted', () => {
      const masked = mask.build('', 'datetime', '_');
      expect(masked).to.be.equal('__/__/____ __:__:__');
    });
  });

  describe('datetime with string format', () => {

    const mask = new Mask(config);

    it('should return complete datetime formatted', () => {
      const masked = mask.exec('2222222222', '##/##/#### ##:##:##');
      expect(masked).to.be.equal('22/22/2222 22');
    });
    it('should return complete datetime formatted with sequence and limit characters', () => {
      const masked = mask.exec('123456789123456789', '##/##/#### ##:##:##');
      expect(masked).to.be.equal('12/34/5678 91:23:45');
    });
    it('should return complete datetime formatted with parameters letters and numbers randomly interspersed', () => {
      const masked = mask.exec('1A2A5N52D26DAS51DKD581D2K12', '##/##/#### ##:##:##');
      expect(masked).to.be.equal('12/55/2265 15:81:21');
    });
    it('should return partial datetime with placehold(underscore) complete formatted with parameters letters and numbers randomly interspersed', () => {
      const masked = mask.exec('1DSA11A', '##/##/#### ##:##:##', '_');
      expect(masked).to.be.equal('11/1_/____ __:__:__');
    });
    it('should return partial datetime formatted', () => {
      const masked = mask.exec('1111', '##/##/#### ##:##:##');
      expect(masked).to.be.equal('11/11');
    });
    it('should return partial datetime formatted with placehold(space)', () => {
      const masked = mask.exec('111', '##/##/#### ##:##:##', ' ');
      expect(masked).to.be.equal('11/1 /       :  :  ');
    });
    it('should return placehold(underscore) complete datetime formatted', () => {
      const masked = mask.exec('', '##/##/#### ##:##:##', '_');
      expect(masked).to.be.equal('__/__/____ __:__:__');
    });
  });
});
