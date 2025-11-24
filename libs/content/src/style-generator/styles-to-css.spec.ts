import { stylesToCSS } from './styles-to-css';

describe('@daffodil/content | stylesToCSS', () => {
  describe('when given an empty object', () => {
    it('should return an empty string', () => {
      expect(stylesToCSS({})).toBe('');
    });
  });

  describe('when given string values', () => {
    it('should output the value as-is', () => {
      const result = stylesToCSS({ color: 'red' });
      expect(result).toBe('  color: red;');
    });

    it('should handle multiple properties', () => {
      const result = stylesToCSS({
        color: 'red',
        background: 'blue',
      });
      expect(result).toBe('  color: red;\n  background: blue;');
    });

    it('should preserve values with units', () => {
      const result = stylesToCSS({ width: '100px' });
      expect(result).toBe('  width: 100px;');
    });

    it('should preserve percentage values', () => {
      const result = stylesToCSS({ width: '50%' });
      expect(result).toBe('  width: 50%;');
    });
  });

  describe('when given numeric values', () => {
    it('should add px suffix to properties that require units', () => {
      const result = stylesToCSS({ width: 100 });
      expect(result).toBe('  width: 100px;');
    });

    it('should not add px suffix to unitless properties', () => {
      const result = stylesToCSS({ opacity: 0.5 });
      expect(result).toBe('  opacity: 0.5;');
    });

    it('should not add px suffix to z-index', () => {
      const result = stylesToCSS({ 'z-index': 10 });
      expect(result).toBe('  z-index: 10;');
    });

    it('should not add px suffix to flex-grow', () => {
      const result = stylesToCSS({ 'flex-grow': 1 });
      expect(result).toBe('  flex-grow: 1;');
    });

    it('should not add px suffix to font-weight', () => {
      const result = stylesToCSS({ 'font-weight': 700 });
      expect(result).toBe('  font-weight: 700;');
    });

    it('should add px suffix to margin', () => {
      const result = stylesToCSS({ margin: 20 });
      expect(result).toBe('  margin: 20px;');
    });

    it('should add px suffix to padding', () => {
      const result = stylesToCSS({ padding: 15 });
      expect(result).toBe('  padding: 15px;');
    });
  });

  describe('when given mixed values', () => {
    it('should correctly handle both string and numeric values', () => {
      const result = stylesToCSS({
        width: 100,
        color: 'red',
        opacity: 0.8,
        'font-size': '16px',
      });
      expect(result).toBe('  width: 100px;\n  color: red;\n  opacity: 0.8;\n  font-size: 16px;');
    });
  });
});
