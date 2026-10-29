import {
  TestBed,
  waitForAsync,
} from '@angular/core/testing';

import { DaffProductCustomAttributeOption } from '@daffodil/product';

import { DaffProductCustomAttributeOptionFactory } from './custom-attribute-option.factory';

describe('@daffodil/product | DaffProductCustomAttributeOptionFactory', () => {
  let factory: DaffProductCustomAttributeOptionFactory;

  beforeEach(waitForAsync(() => {
    factory = TestBed.inject(DaffProductCustomAttributeOptionFactory);
  }));

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffProductCustomAttributeOption;

    beforeEach(() => {
      result = factory.create();
    });

    it('should set required fields', () => {
      expect(result.id).toBeDefined();
      expect(result.label).toBeDefined();
    });
  });
});
