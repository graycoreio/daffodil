import { TestBed } from '@angular/core/testing';

import {
  DaffFilterEqual,
  DaffFilterEqualRequest,
  DaffFilterRangeNumericRequest,
  DaffFilter,
  DaffFilterRequestNameMismatch,
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

import { daffRemoveFilter } from './remove-filter';

describe('@daffodil/core | filters | behaviors | remove | daffRemoveFilter', () => {

  let filterEqualFactory: DaffFilterEqualFactory;
  let filterEqualOptionFactory: DaffFilterEqualOptionFactory;
  let filterRangeNumericFactory: DaffFilterRangeNumericFactory;
  let filterRequestEqualFactory: DaffFilterRequestEqualFactory;
  let filterRequestRangeNumericFactory: DaffFilterRequestRangeNumericFactory;
  let colorFilter: DaffFilterEqual;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    filterEqualFactory = TestBed.inject(DaffFilterEqualFactory);
    filterEqualOptionFactory = TestBed.inject(DaffFilterEqualOptionFactory);
    filterRangeNumericFactory = TestBed.inject(DaffFilterRangeNumericFactory);
    filterRequestEqualFactory = TestBed.inject(DaffFilterRequestEqualFactory);
    filterRequestRangeNumericFactory = TestBed.inject(DaffFilterRequestRangeNumericFactory);

    colorFilter = filterEqualFactory.create({
      name: 'color',
      options: {
        red: filterEqualOptionFactory.create({
          applied: true,
          value: 'red',
        }),
        blue: filterEqualOptionFactory.create({
          applied: false,
          value: 'blue',
        }),
      },
    });
  });

  it('should remove an equal request', () => {
    const request: DaffFilterEqualRequest = filterRequestEqualFactory.create({
      name: 'color',
      value: ['red'],
    });
    const expected: DaffFilterEqual = {
      ...colorFilter,
      options: {
        ...colorFilter.options,
        red: {
          ...colorFilter.options['red'],
          applied: false,
        },
      },
    };

    expect(daffRemoveFilter(request, colorFilter)).toEqual(expected);
  });

  it('should remove a range request', () => {
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

    expect(daffRemoveFilter(request, filter)).toEqual(expected);
  });

  it('should throw an error if a request has a different name than the filter', () => {
    const request: DaffFilterEqualRequest = filterRequestEqualFactory.create({
      name: 'not color',
      value: ['clear'],
    });

    expect(() => {
      daffRemoveFilter(request, colorFilter);
    }).toThrowMatching((e) => e instanceof DaffFilterRequestNameMismatch);

  });

  it('should throw an error if a request has a different type than the filter', () => {
    const request: DaffFilterRangeNumericRequest = filterRequestRangeNumericFactory.create({
      name: 'color',
      value: {
        min: 0,
        max: 20,
      },
    });

    expect(() => {
      daffRemoveFilter(request, colorFilter);
    }).toThrowMatching((e) => e instanceof DaffFilterRequestTypeMismatch);
  });

  it('should throw an error if the request is an unknown type', () => {
    const filter: any = {
      type: 'some other type',
      label: 'Color',
      name: 'color',
      options: {
        red: {
          applied: false,
          value: 'red',
          label: 'Red',
          count: 2,
        },
        blue: {
          applied: false,
          value: 'blue',
          label: 'Blue',
          count: 2,
        },
      },
    };
    const request: any = {
      type: 'some other type',
      name: 'color',
      value: ['red'],
    };

    expect(() => {
      daffRemoveFilter(request, filter);
    }).toThrowMatching((e) => e instanceof DaffFilterUnknownType);
  });

  it('should be idempotent over filter', () => {
    const request = filterRequestRangeNumericFactory.create({
      name: 'price',
      value: {
        min: 0,
        max: 20,
      },
    });

    const filter = filterRangeNumericFactory.create({
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

    expect((idempotentArg?: DaffFilter) => (daffRemoveFilter(request, idempotentArg || filter))).toBeIdempotent();
  });
});
