import {
  TestBed,
  waitForAsync,
} from '@angular/core/testing';

import { DaffProductCustomAttribute } from '@daffodil/product';

import { DaffProductCustomAttributeFactory } from './custom-attribute.factory';

describe('@daffodil/product | DaffProductCustomAttributeFactory', () => {
  let factory: DaffProductCustomAttributeFactory;

  beforeEach(waitForAsync(() => {
    factory = TestBed.inject(DaffProductCustomAttributeFactory);
  }));

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffProductCustomAttribute;

    beforeEach(() => {
      result = factory.create();
    });

    it('should set required fields', () => {
      expect(result.id).toBeDefined();
      expect(result.kind).toBeDefined();
      expect(result.label).toBeDefined();
    });
  });
});
