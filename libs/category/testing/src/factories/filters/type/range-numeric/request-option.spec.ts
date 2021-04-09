import { TestBed } from '@angular/core/testing';

import { DaffCategoryFilterRangeRequestOption } from '@daffodil/category';

import { DaffCategoryFilterRangeNumericRequestOptionFactory } from './request-option';

describe('Category | Testing | Factories | DaffCategoryFilterRangeNumericRequestOptionFactory', () => {

  let factory: DaffCategoryFilterRangeNumericRequestOptionFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffCategoryFilterRangeNumericRequestOptionFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCategoryFilterRangeRequestOption<number>;

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
