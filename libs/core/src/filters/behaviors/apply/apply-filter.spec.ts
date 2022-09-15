import { TestBed } from '@angular/core/testing';

import {
  DaffFilterEqual,
  DaffFilterEqualRequest,
  DaffFilterRangeNumericRequest,
  DaffFilter,
  DaffFilterRequestNameMismatch,
  DaffFilterType,
  DaffFilterRequestTypeMismatch,
  DaffFilterUnknownType,
} from '@daffodil/core';
import {
  DaffFilterEqualFactory,
  DaffFilterEqualOptionFactory,
  DaffFilterRangeNumericFactory,
  DaffFilterRequestEqualFactory,
  DaffFilterRequestRangeNumericFactory,
} from '@daffodil/core/testing';

import { daffApplyFilter } from './apply-filter';

describe('@daffodil/core | filters | behaviors | apply | daffApplyFilter', () => {

  let filterEqualFactory: DaffFilterEqualFactory;
  let filterEqualOptionFactory: DaffFilterEqualOptionFactory;
  let filterRangeNumericFactory: DaffFilterRangeNumericFactory;
  let filterRequestEqualFactory: DaffFilterRequestEqualFactory;
  let filterRequestRangeNumericFactory: DaffFilterRequestRangeNumericFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    filterEqualFactory = TestBed.inject(DaffFilterEqualFactory);
    filterEqualOptionFactory = TestBed.inject(DaffFilterEqualOptionFactory);
    filterRangeNumericFactory = TestBed.inject(DaffFilterRangeNumericFactory);
    filterRequestEqualFactory = TestBed.inject(DaffFilterRequestEqualFactory);
    filterRequestRangeNumericFactory = TestBed.inject(DaffFilterRequestRangeNumericFactory);
  });

  it('should apply an equal filter request', () => {
    const filter: DaffFilterEqual = filterEqualFactory.create({
      name: 'color',
      options: {
        red: filterEqualOptionFactory.create({
          applied: false,
          value: 'red',
        }),
        blue: filterEqualOptionFactory.create({
          applied: false,
          value: 'blue',
        }),
      },
    });
    const request: DaffFilterEqualRequest = filterRequestEqualFactory.create({
      name: 'color',
      value: ['red'],
    });
    const expected: DaffFilterEqual = {
      ...filter,
      options: {
        ...filter.options,
        red: {
          ...filter.options['red'],
          applied: true,
        },
      },
    };

    expect(daffApplyFilter(request, filter)).toEqual(expected);
  });

  it('should apply a range filter request', () => {
    const request: DaffFilterRangeNumericRequest = filterRequestRangeNumericFactory.create({
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
    });

    const expected: DaffFilter = {
      ...filter,
      options: {
        ...filter.options,
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

    expect(daffApplyFilter(request, filter)).toEqual(expected);
  });

  it('should throw an error if the filter name and request names do not match', () => {
    const filter: DaffFilterEqual = filterEqualFactory.create({
      name: 'not color',
      options: {
        clear: filterEqualOptionFactory.create({
          applied: false,
          value: 'clear',
        }),
      },
    });
    const request: DaffFilterEqualRequest = filterRequestEqualFactory.create({
      name: 'color',
      value: ['clear'],
    });

    expect(() => {
      daffApplyFilter(request, filter);
    }).toThrowMatching((e) => e instanceof DaffFilterRequestNameMismatch);
  });

  it('should throw an error if the filter type and request type do not match', () => {
    const filter: DaffFilterEqual = filterEqualFactory.create({
      name: 'color',
      options: {
        red: filterEqualOptionFactory.create({
          applied: false,
          value: 'red',
        }),
        blue: filterEqualOptionFactory.create({
          applied: false,
          value: 'blue',
        }),
      },
    });

    const request: DaffFilterRangeNumericRequest = filterRequestRangeNumericFactory.create({
      type: DaffFilterType.RangeNumeric,
      name: 'color',
      value: {
        min: 0,
        max: 20,
      },
    });

    expect(() => {
      daffApplyFilter(request, filter);
    }).toThrowMatching((e) => e instanceof DaffFilterRequestTypeMismatch);
  });

  it('should throw an error if the request filter type is unknown', () => {
    const filter: any = {
      type: 'some other type',
      label: 'Color',
      name: 'color',
      options: {
        red: {
          applied: false,
          value: 'red',
          label: 'Red',
        },
        blue: {
          applied: false,
          value: 'blue',
          label: 'Blue',
        },
      },
    };
    const request: any = {
      type: 'some other type',
      name: 'color',
      value: ['red'],
    };

    expect(() => {
      daffApplyFilter(request, filter);
    }).toThrowMatching((e) => e instanceof DaffFilterUnknownType);
  });

  it('should be idempotent over filter', () => {
    const request: DaffFilterRangeNumericRequest = filterRequestRangeNumericFactory.create({
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
    });

    expect((idempotentArg?: DaffFilter) => (daffApplyFilter(request, idempotentArg || filter))).toBeIdempotent();
  });
});
