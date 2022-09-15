import { TestBed } from '@angular/core/testing';

import { DaffFilterRangeRequestOption } from '@daffodil/core';

import { DaffFilterRangeNumericRequestOptionFactory } from './request-option';

describe('@daffodil/core/testing | DaffFilterRangeNumericRequestOptionFactory', () => {

  let factory: DaffFilterRangeNumericRequestOptionFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffFilterRangeNumericRequestOptionFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffFilterRangeRequestOption<number>;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return an range numeric request option', () => {
      expect(result.min).toBeDefined();
      expect(typeof result.min).toEqual('number');
      expect(result.max).toBeDefined();
      expect(typeof result.max).toEqual('number');
      expect(result.min).toBeLessThanOrEqual(result.max);
    });
  });
});
