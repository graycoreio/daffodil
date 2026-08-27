import {
  TestBed,
  waitForAsync,
} from '@angular/core/testing';

import { DaffProductCustomAttributeValue } from '@daffodil/product';

import { DaffProductCustomAttributeValueFactory } from './custom-attribute-value.factory';

describe('@daffodil/product | DaffProductCustomAttributeValueFactory', () => {
  let factory: DaffProductCustomAttributeValueFactory;

  beforeEach(waitForAsync(() => {
    factory = TestBed.inject(DaffProductCustomAttributeValueFactory);
  }));

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffProductCustomAttributeValue;

    beforeEach(() => {
      result = factory.create();
    });

    it('should set required fields', () => {
      expect(result.id).toBeDefined();
      expect(result.kind).toBeDefined();
    });
  });
});
