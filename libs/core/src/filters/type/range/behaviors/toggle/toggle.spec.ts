import { TestBed } from '@angular/core/testing';

import {
  DaffFilterRangeNumericRequest,
  DaffFilter,
} from '@daffodil/core';
import {
  DaffFilterRangeNumericFactory,
  DaffFilterToggleRequestRangeNumericFactory,
} from '@daffodil/core/testing';

import { daffToggleFilterRange } from './toggle';

describe('@daffodil/core | filters | type | range | behaviors | toggle', () => {
  let filterRangeNumericFactory: DaffFilterRangeNumericFactory;
  let filterToggleRequestRangeNumericFactory: DaffFilterToggleRequestRangeNumericFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    filterRangeNumericFactory = TestBed.inject(DaffFilterRangeNumericFactory);
    filterToggleRequestRangeNumericFactory = TestBed.inject(DaffFilterToggleRequestRangeNumericFactory);
  });

  it('should remove the request value from the filter when the request value is currently applied', () => {
    const request: DaffFilterRangeNumericRequest = filterToggleRequestRangeNumericFactory.create({
      name: 'price',
      value: {
        min: 0,
        max: 20,
      },
    });
    const filter: DaffFilter = filterRangeNumericFactory.create({
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
    const expected: DaffFilter = {
      ...filter,
      options: {},
    };

    expect(daffToggleFilterRange(request, filter)).toEqual(expected);
  });

  it('should apply the request value to the filter when there is no filter option applied', () => {
    const request: DaffFilterRangeNumericRequest = filterToggleRequestRangeNumericFactory.create({
      name: 'price',
      value: {
        min: 0,
        max: 20,
      },
    });
    const filter: DaffFilter = filterRangeNumericFactory.create({
      name: 'price',
      min: 0,
      max: 200,
      options: {},
    });
    const expected: DaffFilter = {
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
    const request: DaffFilterRangeNumericRequest = filterToggleRequestRangeNumericFactory.create({
      name: 'price',
      value: {
        min: 20,
        max: 40,
      },
    });
    const filter: DaffFilter = filterRangeNumericFactory.create({
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
    const expected: DaffFilter = {
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
