import { expect } from 'chai';
import Mask from '../src/Mask';
import config from './config/default';

describe('Mask', () => {

  describe('simulate dynamic numbers insert with type', () => {

    const mask = new Mask(config);
    let text = '';

    it('should return partial phone formatted with one number', () => {
      text += '1';
      const masked = mask.build(text, 'phone');
      expect(masked).to.be.equal('(1');
    });
    it('should return partial phone formatted with two number', () => {
      text += '2';
      const masked = mask.build(text, 'phone');
      expect(masked).to.be.equal('(12');
    });
    it('should return partial phone formatted with three number', () => {
      text += '3';
      const masked = mask.build(text, 'phone');
      expect(masked).to.be.equal('(12)3');
    });
    it('should return partial phone formatted with four number', () => {
      text += '4';
      const masked = mask.build(text, 'phone');
      expect(masked).to.be.equal('(12)34');
    });
    it('should return partial phone formatted with five number', () => {
      text += '5';
      const masked = mask.build(text, 'phone');
      expect(masked).to.be.equal('(12)345');
    });
    it('should return partial phone formatted with six number', () => {
      text += '6';
      const masked = mask.build(text, 'phone');
      expect(masked).to.be.equal('(12)3456');
    });
    it('should return partial phone formatted with seven number', () => {
      text += '7';
      const masked = mask.build(text, 'phone');
      expect(masked).to.be.equal('(12)3456-7');
    });
    it('should return partial phone formatted with eight number', () => {
      text += '8';
      const masked = mask.build(text, 'phone');
      expect(masked).to.be.equal('(12)3456-78');
    });
    it('should return partial phone formatted with nine number', () => {
      text += '9';
      const masked = mask.build(text, 'phone');
      expect(masked).to.be.equal('(12)3456-789');
    });
    it('should return partial phone formatted with ten number', () => {
      text += '1';
      const masked = mask.build(text, 'phone');
      expect(masked).to.be.equal('(12)3456-7891');
    });
  });

  describe('simulate dynamic numbers insert with string format', () => {

    const mask = new Mask();
    let text = '';

    it('should return partial phone formatted with one number', () => {
      text += '1';
      const masked = mask.exec(text, '(##)####-####');
      expect(masked).to.be.equal('(1');
    });
    it('should return partial phone formatted with two number', () => {
      text += '2';
      const masked = mask.exec(text, '(##)####-####');
      expect(masked).to.be.equal('(12');
    });
    it('should return partial phone formatted with three number', () => {
      text += '3';
      const masked = mask.exec(text, '(##)####-####');
      expect(masked).to.be.equal('(12)3');
    });
    it('should return partial phone formatted with four number', () => {
      text += '4';
      const masked = mask.exec(text, '(##)####-####');
      expect(masked).to.be.equal('(12)34');
    });
    it('should return partial phone formatted with five number', () => {
      text += '5';
      const masked = mask.exec(text, '(##)####-####');
      expect(masked).to.be.equal('(12)345');
    });
    it('should return partial phone formatted with six number', () => {
      text += '6';
      const masked = mask.exec(text, '(##)####-####');
      expect(masked).to.be.equal('(12)3456');
    });
    it('should return partial phone formatted with seven number', () => {
      text += '7';
      const masked = mask.exec(text, '(##)####-####');
      expect(masked).to.be.equal('(12)3456-7');
    });
    it('should return partial phone formatted with eight number', () => {
      text += '8';
      const masked = mask.exec(text, '(##)####-####');
      expect(masked).to.be.equal('(12)3456-78');
    });
    it('should return partial phone formatted with nine number', () => {
      text += '9';
      const masked = mask.exec(text, '(##)####-####');
      expect(masked).to.be.equal('(12)3456-789');
    });
    it('should return partial phone formatted with ten number', () => {
      text += '1';
      const masked = mask.exec(text, '(##)####-####');
      expect(masked).to.be.equal('(12)3456-7891');
    });
  });
});
