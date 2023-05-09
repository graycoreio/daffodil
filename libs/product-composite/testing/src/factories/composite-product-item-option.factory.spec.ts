import { TestBed } from '@angular/core/testing';

import { DaffCompositeProductItemOption } from '@daffodil/product-composite';

import { DaffCompositeProductItemOptionFactory } from './composite-product-item-option.factory';

describe('@daffodil/product-composite/testing | DaffCompositeProductItemOptionFactory', () => {

  let compositeProductFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCompositeProductItemOptionFactory],
    });

    compositeProductFactory = TestBed.inject(DaffCompositeProductItemOptionFactory);
  });

  it('should be created', () => {
    expect(compositeProductFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCompositeProductItemOption;

    beforeEach(() => {
      result = compositeProductFactory.create();
    });

    it('should return a Composite Product with all required fields defined', () => {
      expect(result.quantity).toBeDefined();
      expect(result.is_default).toBeDefined();
    });
  });
});
