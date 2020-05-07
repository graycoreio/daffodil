import { TestBed } from '@angular/core/testing';

import { DaffOrderTotal } from '@daffodil/order';

import { DaffOrderTotalFactory } from './order-total.factory';

describe('Order | Testing | Factories | DaffOrderTotalFactory', () => {
  let factory: DaffOrderTotalFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffOrderTotalFactory]
    });

    factory = TestBed.get(DaffOrderTotalFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffOrderTotal;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a DaffOrderTotal with all the fields defined', () => {
      expect(result).toBeDefined();
      expect(result.label).toBeDefined();
      expect(result.value).toBeDefined();
      expect(result.sort_order).toBeDefined();
    });
  });
});
