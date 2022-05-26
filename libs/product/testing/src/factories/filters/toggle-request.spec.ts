import { TestBed } from '@angular/core/testing';

import { DaffProductFilterToggleRequest } from '@daffodil/product';
import { DaffProductFilterType } from '@daffodil/product';

import { DaffProductFilterToggleRequestFactory } from './toggle-request';

describe('@daffodil/product/testing | DaffProductFilterToggleRequestFactory', () => {

  let factory: DaffProductFilterToggleRequestFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffProductFilterToggleRequestFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffProductFilterToggleRequest;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a toggle-request', () => {
      expect(result.value).toBeDefined();
      expect([DaffProductFilterType.RangeNumeric, DaffProductFilterType.Equal]).toContain(result.type);
    });
  });
});
