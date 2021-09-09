import { TestBed } from '@angular/core/testing';

import {
  DaffConfigurableProduct,
  DaffProductTypeEnum,
} from '@daffodil/product';

import { DaffConfigurableProductFactory } from './configurable-product.factory';

describe('Product | Testing | Factories | DaffConfigurableProductFactory', () => {

  let configurableProductFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffConfigurableProductFactory],
    });

    configurableProductFactory = TestBed.inject(DaffConfigurableProductFactory);
  });

  it('should be created', () => {
    expect(configurableProductFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffConfigurableProduct;

    beforeEach(() => {
      result = configurableProductFactory.create();
    });

    it('should return a Configurable Product with all required fields defined', () => {
      expect(result.type).toEqual(DaffProductTypeEnum.Configurable);
      expect(result.id).toBeDefined();
      expect(result.url).toBeDefined();
      expect(result.price).toBeDefined();
      expect(result.images).toBeDefined();
      expect(result.name).toBeDefined();
      expect(result.brand).toBeDefined();
      expect(result.description).toBeDefined();
      expect(result.in_stock).toBeDefined();
      expect(result.configurableAttributes).toBeDefined();
      expect(result.variants).toBeDefined();
      expect(result.variants[0].in_stock).toBeDefined();
    });

    it('should return any percents as whole numbers', () => {
      expect(result.variants[0].discount.percent % 1).toEqual(0);
    });
  });
});
