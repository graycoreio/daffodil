import { TestBed } from '@angular/core/testing';

import {
  DaffProductFilterRangeNumericRequest,
  DaffProductFilter,
} from '@daffodil/product';
import {
  DaffProductFilterRangeNumericFactory,
  DaffProductFilterToggleRequestRangeNumericFactory,
} from '@daffodil/product/testing';

import { daffToggleFilterRange } from './toggle';

describe('@daffodil/product | filters | type | range | behaviors | toggle', () => {
  let productFilterRangeNumericFactory: DaffProductFilterRangeNumericFactory;
  let productFilterToggleRequestRangeNumericFactory: DaffProductFilterToggleRequestRangeNumericFactory;

  beforeEach(() => {
		 TestBed.configureTestingModule({});

		 productFilterRangeNumericFactory = TestBed.inject(DaffProductFilterRangeNumericFactory);
		 productFilterToggleRequestRangeNumericFactory = TestBed.inject(DaffProductFilterToggleRequestRangeNumericFactory);
  });

  it('should remove the request value from the filter when the request value is currently applied', () => {
    const request: DaffProductFilterRangeNumericRequest = productFilterToggleRequestRangeNumericFactory.create({
      name: 'price',
      value: {
        min: 0,
        max: 20,
      },
    });
    const filter: DaffProductFilter = productFilterRangeNumericFactory.create({
      name: 'price',
      min: 0,
      max: 200,
      options: {
        '0-20': {
          applied: true,
          min: {
            label: '0',
            value: 0,
          },
          max: {
            label: '20',
            value: 20,
          },
        },
      },
    });
    const expected: DaffProductFilter = {
      ...filter,
      options: {},
    };

    expect(daffToggleFilterRange(request, filter)).toEqual(expected);
  });

  it('should apply the request value to the filter when there is no filter option applied', () => {
    const request: DaffProductFilterRangeNumericRequest = productFilterToggleRequestRangeNumericFactory.create({
      name: 'price',
      value: {
        min: 0,
        max: 20,
      },
    });
    const filter: DaffProductFilter = productFilterRangeNumericFactory.create({
      name: 'price',
      min: 0,
      max: 200,
      options: {},
    });
    const expected: DaffProductFilter = {
      ...filter,
      options: {
        '0-20': {
          applied: true,
          min: {
            label: '0',
            value: 0,
          },
          max: {
            label: '20',
            value: 20,
          },
        },
      },
    };

    expect(daffToggleFilterRange(request, filter)).toEqual(expected);
  });

  it('should apply the request value to the filter when there is a different filter value applied', () => {
    const request: DaffProductFilterRangeNumericRequest = productFilterToggleRequestRangeNumericFactory.create({
      name: 'price',
      value: {
        min: 20,
        max: 40,
      },
    });
    const filter: DaffProductFilter = productFilterRangeNumericFactory.create({
      name: 'price',
      min: 0,
      max: 200,
      options: {
        '0-20': {
          applied: true,
          min: {
            label: '0',
            value: 0,
          },
          max: {
            label: '20',
            value: 20,
          },
        },
      },
    });
    const expected: DaffProductFilter = {
      ...filter,
      options: {
        '20-40': {
          applied: true,
          min: {
            label: '20',
            value: 20,
          },
          max: {
            label: '40',
            value: 40,
          },
        },
      },
    };

    expect(daffToggleFilterRange(request, filter)).toEqual(expected);
  });
});
