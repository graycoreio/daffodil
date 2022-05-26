import { TestBed } from '@angular/core/testing';

import {
  DaffProductFilterEqual,
  DaffProductFilterEqualRequest,
  DaffProductFilterRangeNumericRequest,
  DaffProductFilter,
  DaffProductFilterRequestNameMismatch,
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

import { daffRemoveFilter } from './remove-filter';

describe('@daffodil/product | filters | behaviors | remove | daffRemoveFilter', () => {

  let productFilterEqualFactory: DaffProductFilterEqualFactory;
  let productFilterEqualOptionFactory: DaffProductFilterEqualOptionFactory;
  let productFilterRangeNumericFactory: DaffProductFilterRangeNumericFactory;
  let productFilterRequestEqualFactory: DaffProductFilterRequestEqualFactory;
  let productFilterRequestRangeNumericFactory: DaffProductFilterRequestRangeNumericFactory;
  let colorFilter: DaffProductFilterEqual;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    productFilterEqualFactory = TestBed.inject(DaffProductFilterEqualFactory);
    productFilterEqualOptionFactory = TestBed.inject(DaffProductFilterEqualOptionFactory);
    productFilterRangeNumericFactory = TestBed.inject(DaffProductFilterRangeNumericFactory);
    productFilterRequestEqualFactory = TestBed.inject(DaffProductFilterRequestEqualFactory);
    productFilterRequestRangeNumericFactory = TestBed.inject(DaffProductFilterRequestRangeNumericFactory);

    colorFilter = productFilterEqualFactory.create({
      name: 'color',
      options: {
        red: productFilterEqualOptionFactory.create({
          applied: true,
          value: 'red',
        }),
        blue: productFilterEqualOptionFactory.create({
          applied: false,
          value: 'blue',
        }),
      },
    });
  });

  it('should remove an equal request', () => {
    const request: DaffProductFilterEqualRequest = productFilterRequestEqualFactory.create({
      name: 'color',
      value: ['red'],
    });
    const expected: DaffProductFilterEqual = {
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

    expect(daffRemoveFilter(request, filter)).toEqual(expected);
  });

  it('should throw an error if a request has a different name than the filter', () => {
    const request: DaffProductFilterEqualRequest = productFilterRequestEqualFactory.create({
      name: 'not color',
      value: ['clear'],
    });

    expect(() => {
      daffRemoveFilter(request, colorFilter);
    }).toThrowMatching((e) => e instanceof DaffProductFilterRequestNameMismatch);

  });

  it('should throw an error if a request has a different type than the filter', () => {
    const request: DaffProductFilterRangeNumericRequest = productFilterRequestRangeNumericFactory.create({
      name: 'color',
      value: {
        min: 0,
        max: 20,
      },
    });

    expect(() => {
      daffRemoveFilter(request, colorFilter);
    }).toThrowMatching((e) => e instanceof DaffProductFilterRequestTypeMismatch);
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
    }).toThrowMatching((e) => e instanceof DaffProductUnknownFilterType);
  });

  it('should be idempotent over filter', () => {
    const request = productFilterRequestRangeNumericFactory.create({
      name: 'price',
      value: {
        min: 0,
        max: 20,
      },
    });

    const filter = productFilterRangeNumericFactory.create({
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

    expect((idempotentArg?: DaffProductFilter) => (daffRemoveFilter(request, idempotentArg || filter))).toBeIdempotent();
  });
});
