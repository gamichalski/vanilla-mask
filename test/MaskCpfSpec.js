import { expect } from 'chai';
import Mask from '../src/Mask';
import config from './config/default';

describe('Mask', () => {

  describe('cpf with type', () => {

    const mask = new Mask(config);

    it('should return complete cpf formatted', () => {
      const masked = mask.build('11111111111', 'cpf');
      expect(masked).to.be.equal('111.111.111-11');
    });
    it('should return complete cpf formatted with sequence and limit characters', () => {
      const masked = mask.build('123456789123456789', 'cpf');
      expect(masked).to.be.equal('123.456.789-12');
    });
    it('should return complete date formatted with parameters letters and numbers randomly interspersed', () => {
      const masked = mask.build('1A2A510DSA4515NDK25K', 'cpf');
      expect(masked).to.be.equal('125.104.515-25');
    });
    it('should return partial cpf with placehold(underscore) complete formatted with parameters letters and numbers randomly interspersed', () => {
      const masked = mask.build('1DSA11A', 'cpf', '_');
      expect(masked).to.be.equal('111.___.___-__');
    });
    it('should return partial cpf formatted', () => {
      const masked = mask.build('11111', 'cpf');
      expect(masked).to.be.equal('111.11');
    });
    it('should return partial cpf formatted with placehold(space)', () => {
      const masked = mask.build('111', 'cpf', ' ');
      expect(masked).to.be.equal('111.   .   -  ');
    });
    it('should return placehold(underscore) complete cpf formatted', () => {
      const masked = mask.build('', 'cpf', '_');
      expect(masked).to.be.equal('___.___.___-__');
    });
  });

  describe('cpf with string format', () => {

    const mask = new Mask();

    it('should return complete cpf formatted', () => {
      const masked = mask.exec('11111111111', '###.###.###-##');
      expect(masked).to.be.equal('111.111.111-11');
    });
    it('should return complete cpf formatted with sequence and limit characters', () => {
      const masked = mask.exec('123456789123456789', '###.###.###-##');
      expect(masked).to.be.equal('123.456.789-12');
    });
    it('should return complete date formatted with parameters letters and numbers randomly interspersed', () => {
      const masked = mask.exec('1A2A510DSA4515NDK25K', '###.###.###-##');
      expect(masked).to.be.equal('125.104.515-25');
    });
    it('should return partial cpf with placehold(underscore) complete formatted with parameters letters and numbers randomly interspersed', () => {
      const masked = mask.exec('1DSA11A', '###.###.###-##', '_');
      expect(masked).to.be.equal('111.___.___-__');
    });
    it('should return partial cpf formatted', () => {
      const masked = mask.exec('11111', '###.###.###-##');
      expect(masked).to.be.equal('111.11');
    });
    it('should return partial cpf formatted with placehold(space)', () => {
      const masked = mask.exec('111', '###.###.###-##', ' ');
      expect(masked).to.be.equal('111.   .   -  ');
    });
    it('should return placehold(underscore) complete cpf formatted', () => {
      const masked = mask.exec('', '###.###.###-##', '_');
      expect(masked).to.be.equal('___.___.___-__');
    });
  });
});
