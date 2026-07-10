import { TestBed } from '@angular/core/testing';

import { DaffCrossSellProduct } from '@daffodil/cross-sell-products';
import { DaffProductTestingModule } from '@daffodil/product/testing';

import { DaffCrossSellProductFactory } from './cross-sell-product.factory';

describe('@daffodil/cross-sell-products/testing | DaffCrossSellProductFactory', () => {

  let productFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductTestingModule,
      ],
      providers: [
        DaffCrossSellProductFactory,
      ],
    });

    productFactory = TestBed.inject(DaffCrossSellProductFactory);
  });

  it('should be created', () => {
    expect(productFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCrossSellProduct;

    beforeEach(() => {
      result = productFactory.create();
    });

    it('should return a Product with all required fields defined', () => {
      expect(result.type).toBeDefined();
      expect(result.id).toBeDefined();
      expect(result.url).toBeDefined();
      expect(result.price).toBeDefined();
      expect(result.images).toBeDefined();
      expect(result.discount).toBeDefined();
      expect(result.name).toBeDefined();
      expect(result.brand).toBeDefined();
      expect(result.description).toBeDefined();
      expect(result.short_description).toBeDefined();
      expect(result.meta_title).toBeDefined();
      expect(result.meta_description).toBeDefined();
      expect(result.in_stock).toBeDefined();
      expect(result.crossSell).toBeDefined();
    });

    it('should return at least one cross-sell product', () => {
      expect(result.crossSell.length).toBeGreaterThan(0);
    });

    it('should the percentage as a whole number', () => {
      expect(result.discount.percent % 1).toEqual(0);
    });
  });
});
