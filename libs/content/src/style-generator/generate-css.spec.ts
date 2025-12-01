import { generateCSS } from './generate-css';

describe('@daffodil/content | generateCSS', () => {
  describe('when given only base styles', () => {
    it('should generate CSS with the class name', () => {
      const result = generateCSS('test-class', {
        base: { color: 'red' },
      });
      expect(result).toContain('.test-class');
    });

    it('should include the base styles', () => {
      const result = generateCSS('test-class', {
        base: { color: 'red' },
      });
      expect(result).toContain('color: red;');
    });

    it('should add px suffix to numeric values', () => {
      const result = generateCSS('test-class', {
        base: { width: 100 },
      });
      expect(result).toContain('width: 100px;');
    });

    it('should not add px suffix to unitless properties', () => {
      const result = generateCSS('test-class', {
        base: { opacity: 0.5 },
      });
      expect(result).toContain('opacity: 0.5;');
    });

    it('should handle multiple base styles', () => {
      const result = generateCSS('test-class', {
        base: {
          color: 'red',
          width: 100,
          opacity: 0.8,
        },
      });
      expect(result).toContain('color: red;');
      expect(result).toContain('width: 100px;');
      expect(result).toContain('opacity: 0.8;');
    });
  });

  describe('when given only breakpoint styles', () => {
    it('should generate container query CSS', () => {
      const result = generateCSS('test-class', {
        breakpoints: {
          '(min-width: 768px)': { color: 'blue' },
        },
      });
      expect(result).toContain('@container (min-width: 768px)');
    });

    it('should include the class selector within the container query', () => {
      const result = generateCSS('test-class', {
        breakpoints: {
          '(min-width: 768px)': { color: 'blue' },
        },
      });
      expect(result).toContain('.test-class');
    });

    it('should include the breakpoint styles', () => {
      const result = generateCSS('test-class', {
        breakpoints: {
          '(min-width: 768px)': { color: 'blue' },
        },
      });
      expect(result).toContain('color: blue;');
    });

    it('should add px suffix to numeric values in breakpoints', () => {
      const result = generateCSS('test-class', {
        breakpoints: {
          '(min-width: 768px)': { padding: 20 },
        },
      });
      expect(result).toContain('padding: 20px;');
    });

    it('should not add px suffix to unitless properties in breakpoints', () => {
      const result = generateCSS('test-class', {
        breakpoints: {
          '(min-width: 768px)': { 'z-index': 10 },
        },
      });
      expect(result).toContain('z-index: 10;');
    });

    it('should handle multiple breakpoints', () => {
      const result = generateCSS('test-class', {
        breakpoints: {
          '(min-width: 768px)': { color: 'blue' },
          '(min-width: 1024px)': { color: 'green' },
        },
      });
      expect(result).toContain('@container (min-width: 768px)');
      expect(result).toContain('@container (min-width: 1024px)');
      expect(result).toContain('color: blue;');
      expect(result).toContain('color: green;');
    });
  });

  describe('when given both base and breakpoint styles', () => {
    it('should include both base and breakpoint CSS', () => {
      const result = generateCSS('test-class', {
        base: { color: 'red' },
        breakpoints: {
          '(min-width: 768px)': { color: 'blue' },
        },
      });
      expect(result).toContain('.test-class {\n');
      expect(result).toContain('color: red;');
      expect(result).toContain('@container (min-width: 768px)');
      expect(result).toContain('color: blue;');
    });
  });

  describe('when given an empty styles object', () => {
    it('should return an empty string', () => {
      const result = generateCSS('test-class', {});
      expect(result).toBe('');
    });
  });

  describe('when given undefined base styles', () => {
    it('should not include base CSS block', () => {
      const result = generateCSS('test-class', {
        base: undefined,
        breakpoints: {
          '(min-width: 768px)': { color: 'blue' },
        },
      });
      expect(result).not.toContain('.test-class {\n  color');
      expect(result).toContain('@container');
    });
  });

  describe('when given undefined breakpoints', () => {
    it('should not include container query CSS', () => {
      const result = generateCSS('test-class', {
        base: { color: 'red' },
        breakpoints: undefined,
      });
      expect(result).not.toContain('@container');
      expect(result).toContain('color: red;');
    });
  });
});
