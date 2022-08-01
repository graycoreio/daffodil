import { productPriceRangeHasPriceRange } from './has-price-range';

describe('@daffodil/product | productPriceRangeHasPriceRange', () => {
  it('should return true when the min and max original prices are different', () => {
    const stubPriceRange = {
      minPrice: {
        discountedPrice: 10,
        discount: { amount: null, percent: null },
        originalPrice: 10,
      },
      maxPrice: {
        discountedPrice: 10,
        discount: { amount: null, percent: null },
        originalPrice: 20,
      },
    };
    expect(productPriceRangeHasPriceRange(stubPriceRange)).toBeTruthy();
  });

  it('should return true when the min and max discounted prices are different', () => {
    const stubPriceRange = {
      minPrice: {
        discountedPrice: 8,
        discount: { amount: null, percent: null },
        originalPrice: 10,
      },
      maxPrice: {
        discountedPrice: 18,
        discount: { amount: null, percent: null },
        originalPrice: 20,
      },
    };
    expect(productPriceRangeHasPriceRange(stubPriceRange)).toBeTruthy();
  });

  it('should return false when the min and max prices are the same', () => {
    const stubPriceRange = {
      minPrice: {
        discountedPrice: 10,
        discount: { amount: null, percent: null },
        originalPrice: 10,
      },
      maxPrice: {
        discountedPrice: 10,
        discount: { amount: null, percent: null },
        originalPrice: 10,
      },
    };
    expect(productPriceRangeHasPriceRange(stubPriceRange)).toBeFalsy();
  });
});
