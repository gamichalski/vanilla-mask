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
      const masked = mask.build('99999', 'phone');
      expect(masked).to.be.equal('(99)999');
    });
  });

  describe('build with number parameters and default value underscore "_"', () => {

    const mask = new Mask();

    it('should return number phone formatted', () => {
      const masked = mask.build('9999999999', 'phone', '_');
      expect(masked).to.be.equal('(99)9999-9999');
    });
    it('should return completed number phone formatted', () => {
      const masked = mask.build('9999999999999', 'phone', '_');
      expect(masked).to.be.equal('(99)9999-9999');
    });
    it('should return patial number phone formatted with five numbers', () => {
      const masked = mask.build('99999', 'phone', '_');
      expect(masked).to.be.equal('(99)999_-____');
    });
    it('should return patial number phone formatted with two numbers', () => {
      const masked = mask.build('99', 'phone', '_');
      expect(masked).to.be.equal('(99)____-____');
    });
    it('should return mask completed and with underscore', () => {
      const masked = mask.build('', 'phone', '_');
      expect(masked).to.be.equal('(__)____-____');
    });
  });

  describe('build with number parameters and default value space " "', () => {

    const mask = new Mask();

    it('should return number phone formatted', () => {
      const masked = mask.build('9999999999', 'phone', '_');
      expect(masked).to.be.equal('(99)9999-9999');
    });
    it('should return completed number phone formatted', () => {
      const masked = mask.build('9999999999999', 'phone', ' ');
      expect(masked).to.be.equal('(99)9999-9999');
    });
    it('should return patial number phone formatted with six numbers', () => {
      const masked = mask.build('999999', 'phone', ' ');
      expect(masked).to.be.equal('(99)9999-    ');
    });
    it('should return patial number phone formatted with three numbers', () => {
      const masked = mask.build('99', 'phone', ' ');
      expect(masked).to.be.equal('(99)    -    ');
    });
    it('should return mask completed and with space', () => {
      const masked = mask.build('', 'phone', ' ');
      expect(masked).to.be.equal('(  )    -    ');
    });
  });

  describe('build with number and others parameters', () => {

    const mask = new Mask();

    it('should return partial of number phone formatted with parameters letters and numbers randomly interspersed', () => {
      const masked = mask.build('9A9KA8ABC645AK9A9A94589A', 'phone');
      expect(masked).to.be.equal('(99)8645-9994');
    });
    it('should return completed of number phone formatted with parameters letters and numbers randomly interspersed', () => {
      const masked = mask.build('9A9KA9ABCAK9A9A9A', 'phone');
      expect(masked).to.be.equal('(99)9999');
    });
    it('should return partial of number phone formatted with parameters letters and number interspersed and starting letter "A"', () => {
      const masked = mask.build('9A9A9A9A9A9A', 'phone');
      expect(masked).to.be.equal('(99)9999');
    });
    it('should return partial of number phone formatted with parameters starting letter "A" ', () => {
      const masked = mask.build('A9A9A9A9A9A9A', 'phone');
      expect(masked).to.be.equal('(99)9999');
    });
  });

  describe('build with number and others parameters', () => {

    const mask = new Mask();

    // TODO describe
    it('should return partial of number phone formatted with parameters letters and numbers randomly interspersed', () => {
      const masked = mask.build('11111111', 'date');
      expect(masked).to.be.equal('11/11/1111');
    });
    // TODO describe
    it('should return completed of number phone formatted with parameters letters and numbers randomly interspersed', () => {
      const masked = mask.build('1DAS1DASD1S1DSA111DSADSA1', 'date');
      expect(masked).to.be.equal('11/11/1111');
    });
  });
});
