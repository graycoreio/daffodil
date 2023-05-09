import { TestBed } from '@angular/core/testing';

import { DaffCompositeProductItem } from '@daffodil/product-composite';

import { DaffCompositeProductItemFactory } from './composite-product-item.factory';

describe('@daffodil/product-composite/testing | DaffCompositeProductItemFactory', () => {

  let compositeProductFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCompositeProductItemFactory],
    });

    compositeProductFactory = TestBed.inject(DaffCompositeProductItemFactory);
  });

  it('should be created', () => {
    expect(compositeProductFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCompositeProductItem;

    beforeEach(() => {
      result = compositeProductFactory.create();
    });

    it('should return a Composite Product with all required fields defined', () => {
      expect(result.id).toBeDefined();
      expect(result.required).toBeDefined();
      expect(result.title).toBeDefined();
      expect(result.input_type).toBeDefined();
      expect(result.options).toBeDefined();
    });
  });
});
