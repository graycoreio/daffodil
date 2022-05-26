import { TestBed } from '@angular/core/testing';

import { DaffProductFilterRangeRequestOption } from '@daffodil/product';

import { DaffProductFilterRangeNumericRequestOptionFactory } from './request-option';

describe('@daffodil/product/testing | DaffProductFilterRangeNumericRequestOptionFactory', () => {

  let factory: DaffProductFilterRangeNumericRequestOptionFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffProductFilterRangeNumericRequestOptionFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffProductFilterRangeRequestOption<number>;

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
