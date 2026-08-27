import { TestBed } from '@angular/core/testing';

import { DaffCartWithCrossSellProducts } from '@daffodil/cross-sell-products';
import { DaffProductTestingModule } from '@daffodil/product/testing';

import { DaffCartWithCrossSellProductsFactory } from './cross-sell-product.factory';

describe('@daffodil/cross-sell-products/testing | DaffCartWithCrossSellProductsFactory', () => {
  let factory: DaffCartWithCrossSellProductsFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductTestingModule,
      ],
      providers: [
        DaffCartWithCrossSellProductsFactory,
      ],
    });

    factory = TestBed.inject(DaffCartWithCrossSellProductsFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCartWithCrossSellProducts;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return at least one cross-sell product', () => {
      expect(result.crossSells.length).toBeGreaterThan(0);
      expect(result.crossSellIds.length).toBeGreaterThan(0);
    });

    it('should use product IDs from the list of cross sells', () => {
      result.crossSellIds.forEach((id) => {
        expect(result.crossSells).toContain(jasmine.objectContaining({ id }));
      });
    });
  });
});
