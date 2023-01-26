import { TestBed } from '@angular/core/testing';

import { DaffOrderCollection } from '@daffodil/order';

import { DaffOrderCollectionFactory } from './order-collection.factory';

describe('@daffodil/order/testing | DaffOrderCollectionFactory', () => {
  let factory: DaffOrderCollectionFactory;

  beforeEach(() => {
    factory = TestBed.inject(DaffOrderCollectionFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffOrderCollection;

    beforeEach(() => {
      result = factory.create();
    });

    it('should define all required fields', () => {
      expect(result.metadata).toBeDefined();
      expect(result.data).toBeDefined();
    });
  });
});
