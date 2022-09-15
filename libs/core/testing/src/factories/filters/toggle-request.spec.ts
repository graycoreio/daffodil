import { TestBed } from '@angular/core/testing';

import { DaffFilterToggleRequest } from '@daffodil/core';
import { DaffFilterType } from '@daffodil/core';

import { DaffFilterToggleRequestFactory } from './toggle-request';

describe('@daffodil/core/testing | DaffFilterToggleRequestFactory', () => {

  let factory: DaffFilterToggleRequestFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffFilterToggleRequestFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffFilterToggleRequest;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a toggle-request', () => {
      expect(result.value).toBeDefined();
      expect([DaffFilterType.RangeNumeric, DaffFilterType.Equal]).toContain(result.type);
    });
  });
});
