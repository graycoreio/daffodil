import { TestBed } from '@angular/core/testing';

import { DaffCompositeProduct } from '@daffodil/product';

import { DaffCompositeProductFactory } from './composite-product.factory';

describe('Product | Testing | Factories | DaffCompositeProductFactory', () => {
  
  let compositeProductFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCompositeProductFactory]
    });

    compositeProductFactory = TestBed.get(DaffCompositeProductFactory);
  });

  it('should be created', () => {
    expect(compositeProductFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCompositeProduct;

    beforeEach(() => {
      result = compositeProductFactory.create();
    });
    
    it('should return a CompositeProduct with all required fields defined', () => {
      expect(result.items).toBeDefined();
    });
  });
});
