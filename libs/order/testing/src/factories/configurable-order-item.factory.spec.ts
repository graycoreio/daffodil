import { TestBed } from '@angular/core/testing';

import { DaffConfigurableOrderItem } from '@daffodil/order';

import { DaffConfigurableOrderItemFactory } from './configurable-order-item.factory';

describe('Order | Testing | Factories | ConfigurableOrderItemFactory', () => {

  let configurableOrderItemFactory: DaffConfigurableOrderItemFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffConfigurableOrderItemFactory]
    });

    configurableOrderItemFactory = TestBed.inject(DaffConfigurableOrderItemFactory);
  });

  it('should be created', () => {
    expect(configurableOrderItemFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffConfigurableOrderItem;

    beforeEach(() => {
      result = configurableOrderItemFactory.create();
    });

    it('should return a DaffConfigurableOrderItem with all required fields defined', () => {
      expect(result.attributes[0].attribute_label).not.toBeNull();
      expect(result.attributes[0].value_label).not.toBeNull();
    });
  });
});
