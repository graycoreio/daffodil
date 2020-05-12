import { TestBed } from '@angular/core/testing';

import { DaffConfigurableProductFactory } from './configurable-product.factory';
import { DaffConfigurableProduct, DaffProductTypeEnum } from '@daffodil/product';

describe('Product | Testing | Factories | DaffConfigurableProductFactory', () => {
  
  let configurableProductFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffConfigurableProductFactory]
    });

    configurableProductFactory = TestBed.get(DaffConfigurableProductFactory);
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
      expect(result.name).toBeDefined();
      expect(result.brand).toBeDefined();
			expect(result.description).toBeDefined();
			expect(result.configurableAttributes).toBeDefined();
			expect(result.variants).toBeDefined();
    });
  });
});
