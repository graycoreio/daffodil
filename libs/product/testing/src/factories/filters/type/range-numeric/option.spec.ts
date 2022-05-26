import { TestBed } from '@angular/core/testing';

import { DaffProductFilterRangeOption } from '@daffodil/product';

import { DaffProductFilterRangeNumericOptionFactory } from './option';

describe('@daffodil/product/testing | DaffProductFilterRangeNumericOptionFactory', () => {

  let factory: DaffProductFilterRangeNumericOptionFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffProductFilterRangeNumericOptionFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffProductFilterRangeOption<number>;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a numeric range option', () => {
      expect(result.value).toBeDefined();
      expect(typeof result.value).toEqual('number');
    });
  });
});
