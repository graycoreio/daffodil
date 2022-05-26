import { TestBed } from '@angular/core/testing';

import {
  DaffProductFilterEqual,
  DaffProductFilterEqualRequest,
  DaffProductFilterRangeNumericRequest,
  DaffProductFilter,
  DaffProductFilterRequestNameMismatch,
  DaffProductFilterType,
  DaffProductFilterRequestTypeMismatch,
  DaffProductUnknownFilterType,
} from '@daffodil/product';
import {
  DaffProductFilterEqualFactory,
  DaffProductFilterEqualOptionFactory,
  DaffProductFilterRangeNumericFactory,
  DaffProductFilterRequestEqualFactory,
  DaffProductFilterRequestRangeNumericFactory,
} from '@daffodil/product/testing';

import { daffApplyFilter } from './apply-filter';

describe('@daffodil/product | filters | behaviors | apply | daffApplyFilter', () => {

  let productFilterEqualFactory: DaffProductFilterEqualFactory;
  let productFilterEqualOptionFactory: DaffProductFilterEqualOptionFactory;
  let productFilterRangeNumericFactory: DaffProductFilterRangeNumericFactory;
  let productFilterRequestEqualFactory: DaffProductFilterRequestEqualFactory;
  let productFilterRequestRangeNumericFactory: DaffProductFilterRequestRangeNumericFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    productFilterEqualFactory = TestBed.inject(DaffProductFilterEqualFactory);
    productFilterEqualOptionFactory = TestBed.inject(DaffProductFilterEqualOptionFactory);
    productFilterRangeNumericFactory = TestBed.inject(DaffProductFilterRangeNumericFactory);
    productFilterRequestEqualFactory = TestBed.inject(DaffProductFilterRequestEqualFactory);
    productFilterRequestRangeNumericFactory = TestBed.inject(DaffProductFilterRequestRangeNumericFactory);
  });

  it('should apply an equal filter request', () => {
    const filter: DaffProductFilterEqual = productFilterEqualFactory.create({
      name: 'color',
      options: {
        red: productFilterEqualOptionFactory.create({
          applied: false,
          value: 'red',
        }),
        blue: productFilterEqualOptionFactory.create({
          applied: false,
          value: 'blue',
        }),
      },
    });
    const request: DaffProductFilterEqualRequest = productFilterRequestEqualFactory.create({
      name: 'color',
      value: ['red'],
    });
    const expected: DaffProductFilterEqual = {
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
    const request: DaffProductFilterRangeNumericRequest = productFilterRequestRangeNumericFactory.create({
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
    });

    const expected: DaffProductFilter = {
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
    const filter: DaffProductFilterEqual = productFilterEqualFactory.create({
      name: 'not color',
      options: {
        clear: productFilterEqualOptionFactory.create({
          applied: false,
          value: 'clear',
        }),
      },
    });
    const request: DaffProductFilterEqualRequest = productFilterRequestEqualFactory.create({
      name: 'color',
      value: ['clear'],
    });

    expect(() => {
      daffApplyFilter(request, filter);
    }).toThrowMatching((e) => e instanceof DaffProductFilterRequestNameMismatch);
  });

  it('should throw an error if the filter type and request type do not match', () => {
    const filter: DaffProductFilterEqual = productFilterEqualFactory.create({
      name: 'color',
      options: {
        red: productFilterEqualOptionFactory.create({
          applied: false,
          value: 'red',
        }),
        blue: productFilterEqualOptionFactory.create({
          applied: false,
          value: 'blue',
        }),
      },
    });

    const request: DaffProductFilterRangeNumericRequest = productFilterRequestRangeNumericFactory.create({
      type: DaffProductFilterType.RangeNumeric,
      name: 'color',
      value: {
        min: 0,
        max: 20,
      },
    });

    expect(() => {
      daffApplyFilter(request, filter);
    }).toThrowMatching((e) => e instanceof DaffProductFilterRequestTypeMismatch);
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
    }).toThrowMatching((e) => e instanceof DaffProductUnknownFilterType);
  });

  it('should be idempotent over filter', () => {
    const request: DaffProductFilterRangeNumericRequest = productFilterRequestRangeNumericFactory.create({
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
    });

    expect((idempotentArg?: DaffProductFilter) => (daffApplyFilter(request, idempotentArg || filter))).toBeIdempotent();
  });
});
