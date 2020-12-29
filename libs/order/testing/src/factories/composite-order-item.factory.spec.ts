import { TestBed } from '@angular/core/testing';

import { DaffCompositeOrderItem } from '@daffodil/order';

import { DaffCompositeOrderItemFactory } from './composite-order-item.factory';

describe('Order | Testing | Factories | CompositeOrderItemFactory', () => {
  let compositeOrderItemFactory: DaffCompositeOrderItemFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCompositeOrderItemFactory]
    });

    compositeOrderItemFactory = TestBed.inject(DaffCompositeOrderItemFactory);
  });

  it('should be created', () => {
    expect(compositeOrderItemFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCompositeOrderItem;

    beforeEach(() => {
      result = compositeOrderItemFactory.create();
    });

    it('should return a DaffCompositeOrderItem with all required fields defined', () => {
      expect(result.options[0].option_label).not.toBeNull();
      expect(result.options[0].value_label).not.toBeNull();
    });
  });
});
