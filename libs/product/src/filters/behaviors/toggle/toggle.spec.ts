import { TestBed } from '@angular/core/testing';

import {
  DaffProductFilterEqual,
  DaffProductFilterToggleRequest,
  DaffProductFilter,
  DaffProductFilterRequestNameMismatch,
  DaffProductFilterRequestTypeMismatch,
  DaffProductUnknownFilterType,
} from '@daffodil/product';
import {
  DaffProductFilterEqualFactory,
  DaffProductFilterEqualOptionFactory,
  DaffProductFilterRangeNumericFactory,
  DaffProductFilterToggleRequestEqualFactory,
  DaffProductFilterToggleRequestRangeNumericFactory,
} from '@daffodil/product/testing';

import { daffToggleFilter } from './toggle';

describe('@daffodil/product | filters | behaviors | toggle | toggle', () => {

  let productFilterEqualFactory: DaffProductFilterEqualFactory;
  let productFilterEqualOptionFactory: DaffProductFilterEqualOptionFactory;
  let productFilterRangeNumericFactory: DaffProductFilterRangeNumericFactory;
  let productFilterToggleRequestEqualFactory: DaffProductFilterToggleRequestEqualFactory;
  let productFilterToggleRequestRangeNumericFactory: DaffProductFilterToggleRequestRangeNumericFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    productFilterEqualFactory = TestBed.inject(DaffProductFilterEqualFactory);
    productFilterEqualOptionFactory = TestBed.inject(DaffProductFilterEqualOptionFactory);
    productFilterRangeNumericFactory = TestBed.inject(DaffProductFilterRangeNumericFactory);
    productFilterToggleRequestEqualFactory = TestBed.inject(DaffProductFilterToggleRequestEqualFactory);
    productFilterToggleRequestRangeNumericFactory = TestBed.inject(DaffProductFilterToggleRequestRangeNumericFactory);
  });

  let colorFilter: DaffProductFilterEqual;

  beforeEach(() => {
    colorFilter = productFilterEqualFactory.create({
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
  });

  it('should toggle an equal filter request', () => {
    const request: DaffProductFilterToggleRequest = productFilterToggleRequestEqualFactory.create({
      name: 'color',
      value: 'red',
    });
    const expected: DaffProductFilterEqual = {
      ...colorFilter,
      options: {
        ...colorFilter.options,
        red: {
          ...colorFilter.options['red'],
          applied: true,
        },
      },
    };

    expect(daffToggleFilter(request, colorFilter)).toEqual(expected);
  });

  it('should toggle a range filter request', () => {
    const request: DaffProductFilterToggleRequest = productFilterToggleRequestRangeNumericFactory.create({
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

    expect(daffToggleFilter(request, filter)).toEqual(expected);
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
    const request: DaffProductFilterToggleRequest = productFilterToggleRequestEqualFactory.create({
      name: 'color',
      value: 'clear',
    });

    expect(() => {
      daffToggleFilter(request, filter);
    }).toThrowMatching((e) => e instanceof DaffProductFilterRequestNameMismatch);
  });

  it('should throw an error if the filter type and request type do not match', () => {
    const request: DaffProductFilterToggleRequest = productFilterToggleRequestRangeNumericFactory.create({
      name: 'color',
      value: {
        min: 0,
        max: 20,
      },
    });

    expect(() => {
      daffToggleFilter(request, colorFilter);
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
      daffToggleFilter(request, filter);
    }).toThrowMatching((e) => e instanceof DaffProductUnknownFilterType);
  });
});
