import { TestBed } from '@angular/core/testing';

import { DaffCategoryFilterRangeOption } from '@daffodil/category';

import { DaffCategoryFilterRangeNumericOptionFactory } from './option';

describe('Category | Testing | Factories | DaffCategoryFilterRangeNumericOptionFactory', () => {

  let factory: DaffCategoryFilterRangeNumericOptionFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffCategoryFilterRangeNumericOptionFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCategoryFilterRangeOption<number>;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a numeric range option', () => {
      expect(result.value).toBeDefined();
      expect(typeof result.value).toEqual('number');
    });
  });
});
