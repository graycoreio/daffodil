import { TestBed } from '@angular/core/testing';

import { DaffCartTotal } from '@daffodil/cart';

import { DaffCartTotalFactory } from './cart-total.factory';

describe('@daffodil/cart/testing | DaffCartTotalFactory', () => {
  let factory: DaffCartTotalFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCartTotalFactory],
    });

    factory = TestBed.inject(DaffCartTotalFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffCartTotal;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a CartTotal with all required fields defined', () => {
      expect(result.name).toBeDefined();
      expect(result.value).toBeDefined();
      expect(result.label).toBeDefined();
      expect(result.order).toBeDefined();
    });
  });
});
