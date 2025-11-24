import { isUnitless } from './is-unitless';

describe('@daffodil/content | isUnitless', () => {
  describe('when given a unitless property', () => {
    it('should return true for opacity', () => {
      expect(isUnitless('opacity')).toBe(true);
    });

    it('should return true for z-index', () => {
      expect(isUnitless('z-index')).toBe(true);
    });

    it('should return true for font-weight', () => {
      expect(isUnitless('font-weight')).toBe(true);
    });

    it('should return true for line-height', () => {
      expect(isUnitless('line-height')).toBe(true);
    });

    it('should return true for flex', () => {
      expect(isUnitless('flex')).toBe(true);
    });

    it('should return true for flex-grow', () => {
      expect(isUnitless('flex-grow')).toBe(true);
    });

    it('should return true for flex-shrink', () => {
      expect(isUnitless('flex-shrink')).toBe(true);
    });

    it('should return true for order', () => {
      expect(isUnitless('order')).toBe(true);
    });

    it('should return true for grid-column', () => {
      expect(isUnitless('grid-column')).toBe(true);
    });

    it('should return true for grid-row', () => {
      expect(isUnitless('grid-row')).toBe(true);
    });
  });

  describe('when given a property that requires units', () => {
    it('should return false for width', () => {
      expect(isUnitless('width')).toBe(false);
    });

    it('should return false for height', () => {
      expect(isUnitless('height')).toBe(false);
    });

    it('should return false for padding', () => {
      expect(isUnitless('padding')).toBe(false);
    });

    it('should return false for margin', () => {
      expect(isUnitless('margin')).toBe(false);
    });

    it('should return false for font-size', () => {
      expect(isUnitless('font-size')).toBe(false);
    });

    it('should return false for border-width', () => {
      expect(isUnitless('border-width')).toBe(false);
    });

    it('should return false for top', () => {
      expect(isUnitless('top')).toBe(false);
    });

    it('should return false for left', () => {
      expect(isUnitless('left')).toBe(false);
    });
  });
});