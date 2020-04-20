import { TestBed } from '@angular/core/testing';

import { DaffCompositeProductFactory } from './composite-product.factory';
import { DaffCompositeProduct } from '@daffodil/product';

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
    
    it('should return a Composite Product with all required fields defined', () => {
      expect(result.type).toBeDefined();
			expect(result.id).toBeDefined();
      expect(result.url).toBeDefined();
      expect(result.price).toBeDefined();
      expect(result.name).toBeDefined();
      expect(result.brand).toBeDefined();
			expect(result.description).toBeDefined();
			expect(result.items[0].id).toBeDefined();
			expect(result.items[0].required).toBeDefined();
			expect(result.items[0].title).toBeDefined();
			expect(result.items[0].input_type).toBeDefined();
			expect(result.items[0].options[0].id).toBeDefined();
			expect(result.items[0].options[0].name).toBeDefined();
			expect(result.items[0].options[0].price).toBeDefined();
			expect(result.items[0].options[0].quantity).toBeDefined();
    });
  });
});
