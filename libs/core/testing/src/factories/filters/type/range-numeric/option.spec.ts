import { TestBed } from '@angular/core/testing';

import { DaffFilterRangeOption } from '@daffodil/core';

import { DaffFilterRangeNumericOptionFactory } from './option';

describe('@daffodil/core/testing | DaffFilterRangeNumericOptionFactory', () => {

  let factory: DaffFilterRangeNumericOptionFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffFilterRangeNumericOptionFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffFilterRangeOption<number>;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a numeric range option', () => {
      expect(result.value).toBeDefined();
      expect(typeof result.value).toEqual('number');
    });
  });
});
