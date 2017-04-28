import { expect } from 'chai';
import Mask from '../src/Mask';
import config from './config/default';

describe('Mask', () => {

  describe('simulate dynamic numbers insert with type', () => {

    const mask = new Mask(config);
    let text = '';

    it('should return complete phone formatted', () => {
      text += '1';
      const masked = mask.build(text, 'phone');
      expect(masked).to.be.equal('(1');
    });
    it('should return complete phone formatted', () => {
      text += '2';
      const masked = mask.build(text, 'phone');
      expect(masked).to.be.equal('(12');
    });
    it('should return complete phone formatted', () => {
      text += '3';
      const masked = mask.build(text, 'phone');
      expect(masked).to.be.equal('(12)3');
    });
    it('should return complete phone formatted', () => {
      text += '4';
      const masked = mask.build(text, 'phone');
      expect(masked).to.be.equal('(12)34');
    });
    it('should return complete phone formatted', () => {
      text += '5';
      const masked = mask.build(text, 'phone');
      expect(masked).to.be.equal('(12)345');
    });
    it('should return complete phone formatted', () => {
      text += '6';
      const masked = mask.build(text, 'phone');
      expect(masked).to.be.equal('(12)3456');
    });
    it('should return complete phone formatted', () => {
      text += '7';
      const masked = mask.build(text, 'phone');
      expect(masked).to.be.equal('(12)3456-7');
    });
    it('should return complete phone formatted', () => {
      text += '8';
      const masked = mask.build(text, 'phone');
      expect(masked).to.be.equal('(12)3456-78');
    });
    it('should return complete phone formatted', () => {
      text += '9';
      const masked = mask.build(text, 'phone');
      expect(masked).to.be.equal('(12)3456-789');
    });
    it('should return complete phone formatted', () => {
      text += '1';
      const masked = mask.build(text, 'phone');
      expect(masked).to.be.equal('(12)3456-7891');
    });
  });

  describe('simulate dynamic numbers insert with string format', () => {

    const mask = new Mask();
    let text = '';

    it('should return complete phone formatted', () => {
      text += '1';
      const masked = mask.exec(text, '(##)####-####');
      expect(masked).to.be.equal('(1');
    });
    it('should return complete phone formatted', () => {
      text += '2';
      const masked = mask.exec(text, '(##)####-####');
      expect(masked).to.be.equal('(12');
    });
    it('should return complete phone formatted', () => {
      text += '3';
      const masked = mask.exec(text, '(##)####-####');
      expect(masked).to.be.equal('(12)3');
    });
    it('should return complete phone formatted', () => {
      text += '4';
      const masked = mask.exec(text, '(##)####-####');
      expect(masked).to.be.equal('(12)34');
    });
    it('should return complete phone formatted', () => {
      text += '5';
      const masked = mask.exec(text, '(##)####-####');
      expect(masked).to.be.equal('(12)345');
    });
    it('should return complete phone formatted', () => {
      text += '6';
      const masked = mask.exec(text, '(##)####-####');
      expect(masked).to.be.equal('(12)3456');
    });
    it('should return complete phone formatted', () => {
      text += '7';
      const masked = mask.exec(text, '(##)####-####');
      expect(masked).to.be.equal('(12)3456-7');
    });
    it('should return complete phone formatted', () => {
      text += '8';
      const masked = mask.exec(text, '(##)####-####');
      expect(masked).to.be.equal('(12)3456-78');
    });
    it('should return complete phone formatted', () => {
      text += '9';
      const masked = mask.exec(text, '(##)####-####');
      expect(masked).to.be.equal('(12)3456-789');
    });
    it('should return complete phone formatted', () => {
      text += '1';
      const masked = mask.exec(text, '(##)####-####');
      expect(masked).to.be.equal('(12)3456-7891');
    });
  });
});
