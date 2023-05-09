import { TestBed } from '@angular/core/testing';

import { DaffCompositeProduct } from '@daffodil/product-composite';

import { DaffCompositeProductFactory } from './composite-product.factory';

describe('@daffodil/product-composite/testing | DaffCompositeProductFactory', () => {

  let compositeProductFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCompositeProductFactory],
    });

    compositeProductFactory = TestBed.inject(DaffCompositeProductFactory);
  });

  it('should be created', () => {
    expect(compositeProductFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCompositeProduct;

    beforeEach(() => {
      result = compositeProductFactory.create();
    });

    it('should return a Composite Product with all required fields defined', () => {
      expect(result.type).toBeDefined();
      expect(result.id).toBeDefined();
      expect(result.url).toBeDefined();
      expect(result.price).toBeDefined();
      expect(result.images).toBeDefined();
      expect(result.discount.amount).toBeDefined();
      expect(result.discount.percent).toBeDefined();
      expect(result.name).toBeDefined();
      expect(result.brand).toBeDefined();
      expect(result.description).toBeDefined();
      expect(result.in_stock).toBeDefined();
      expect(result.items).toBeDefined();
    });
  });
});
