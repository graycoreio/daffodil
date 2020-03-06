import { TestBed } from '@angular/core/testing';

import { DaffBundledProduct } from '@daffodil/product';

import { DaffBundledProductFactory } from './bundled-product.factory';

describe('Product | Testing | Factories | DaffBundledProductFactory', () => {
  
  let bundledProductFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffBundledProductFactory]
    });

    bundledProductFactory = TestBed.get(DaffBundledProductFactory);
  });

  it('should be created', () => {
    expect(bundledProductFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffBundledProduct;

    beforeEach(() => {
      result = bundledProductFactory.create();
    });
    
    it('should return a BundledProduct with all required fields defined', () => {
			expect(result.price_view).toBeDefined();
      expect(result.items).toBeDefined();
    });
  });
});
