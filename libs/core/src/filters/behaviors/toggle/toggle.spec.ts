import { TestBed } from '@angular/core/testing';

import {
  DaffFilterEqual,
  DaffFilterToggleRequest,
  DaffFilter,
  DaffFilterRequestNameMismatch,
  DaffFilterRequestTypeMismatch,
  DaffFilterUnknownType,
} from '@daffodil/core';
import {
  DaffFilterEqualFactory,
  DaffFilterEqualOptionFactory,
  DaffFilterRangeNumericFactory,
  DaffFilterToggleRequestEqualFactory,
  DaffFilterToggleRequestRangeNumericFactory,
} from '@daffodil/core/testing';

import { daffToggleFilter } from './toggle';

describe('@daffodil/core | filters | behaviors | toggle | toggle', () => {

  let filterEqualFactory: DaffFilterEqualFactory;
  let filterEqualOptionFactory: DaffFilterEqualOptionFactory;
  let filterRangeNumericFactory: DaffFilterRangeNumericFactory;
  let filterToggleRequestEqualFactory: DaffFilterToggleRequestEqualFactory;
  let filterToggleRequestRangeNumericFactory: DaffFilterToggleRequestRangeNumericFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    filterEqualFactory = TestBed.inject(DaffFilterEqualFactory);
    filterEqualOptionFactory = TestBed.inject(DaffFilterEqualOptionFactory);
    filterRangeNumericFactory = TestBed.inject(DaffFilterRangeNumericFactory);
    filterToggleRequestEqualFactory = TestBed.inject(DaffFilterToggleRequestEqualFactory);
    filterToggleRequestRangeNumericFactory = TestBed.inject(DaffFilterToggleRequestRangeNumericFactory);
  });

  let colorFilter: DaffFilterEqual;

  beforeEach(() => {
    colorFilter = filterEqualFactory.create({
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
  });

  it('should toggle an equal filter request', () => {
    const request: DaffFilterToggleRequest = filterToggleRequestEqualFactory.create({
      name: 'color',
      value: 'red',
    });
    const expected: DaffFilterEqual = {
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
    const request: DaffFilterToggleRequest = filterToggleRequestRangeNumericFactory.create({
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

    expect(daffToggleFilter(request, filter)).toEqual(expected);
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
    const request: DaffFilterToggleRequest = filterToggleRequestEqualFactory.create({
      name: 'color',
      value: 'clear',
    });

    expect(() => {
      daffToggleFilter(request, filter);
    }).toThrowMatching((e) => e instanceof DaffFilterRequestNameMismatch);
  });

  it('should throw an error if the filter type and request type do not match', () => {
    const request: DaffFilterToggleRequest = filterToggleRequestRangeNumericFactory.create({
      name: 'color',
      value: {
        min: 0,
        max: 20,
      },
    });

    expect(() => {
      daffToggleFilter(request, colorFilter);
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
    }).toThrowMatching((e) => e instanceof DaffFilterUnknownType);
  });
});
