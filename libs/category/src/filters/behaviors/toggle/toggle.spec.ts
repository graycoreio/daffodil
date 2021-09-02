import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterEqual,
  DaffCategoryFilterToggleRequest,
  DaffCategoryFilter,
  DaffCategoryFilterRequestNameMismatch,
  DaffCategoryFilterRequestTypeMismatch,
  DaffCategoryUnknownFilterType,
} from '@daffodil/category';
import {
  DaffCategoryFilterEqualFactory,
  DaffCategoryFilterEqualOptionFactory,
  DaffCategoryFilterRangeNumericFactory,
  DaffCategoryFilterToggleRequestEqualFactory,
  DaffCategoryFilterToggleRequestRangeNumericFactory,
} from '@daffodil/category/testing';

import { daffToggleFilter } from './toggle';

describe('@daffodil/category | filters | behaviors | toggle | toggle', () => {

  let categoryFilterEqualFactory: DaffCategoryFilterEqualFactory;
  let categoryFilterEqualOptionFactory: DaffCategoryFilterEqualOptionFactory;
  let categoryFilterRangeNumericFactory: DaffCategoryFilterRangeNumericFactory;
  let categoryFilterToggleRequestEqualFactory: DaffCategoryFilterToggleRequestEqualFactory;
  let categoryFilterToggleRequestRangeNumericFactory: DaffCategoryFilterToggleRequestRangeNumericFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    categoryFilterEqualFactory = TestBed.inject(DaffCategoryFilterEqualFactory);
    categoryFilterEqualOptionFactory = TestBed.inject(DaffCategoryFilterEqualOptionFactory);
    categoryFilterRangeNumericFactory = TestBed.inject(DaffCategoryFilterRangeNumericFactory);
    categoryFilterToggleRequestEqualFactory = TestBed.inject(DaffCategoryFilterToggleRequestEqualFactory);
    categoryFilterToggleRequestRangeNumericFactory = TestBed.inject(DaffCategoryFilterToggleRequestRangeNumericFactory);
  });

  let colorFilter: DaffCategoryFilterEqual;

  beforeEach(() => {
    colorFilter = categoryFilterEqualFactory.create({
      name: 'color',
      options: {
        red: categoryFilterEqualOptionFactory.create({
          applied: false,
          value: 'red',
        }),
        blue: categoryFilterEqualOptionFactory.create({
          applied: false,
          value: 'blue',
        }),
      },
    });
  });

  it('should toggle an equal filter request', () => {
    const request: DaffCategoryFilterToggleRequest = categoryFilterToggleRequestEqualFactory.create({
      name: 'color',
      value: 'red',
    });
    const expected: DaffCategoryFilterEqual = {
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
    const request: DaffCategoryFilterToggleRequest = categoryFilterToggleRequestRangeNumericFactory.create({
      name: 'price',
      value: {
        min: 0,
        max: 20,
      },
    });

    const filter: DaffCategoryFilter = categoryFilterRangeNumericFactory.create({
      name: 'price',
      min: 0,
      max: 200,
      options: {},
    });

    const expected: DaffCategoryFilter = {
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
    const filter: DaffCategoryFilterEqual = categoryFilterEqualFactory.create({
      name: 'not color',
      options: {
        clear: categoryFilterEqualOptionFactory.create({
          applied: false,
          value: 'clear',
        }),
      },
    });
    const request: DaffCategoryFilterToggleRequest = categoryFilterToggleRequestEqualFactory.create({
      name: 'color',
      value: 'clear',
    });

    expect(() => {
      daffToggleFilter(request, filter);
    }).toThrowMatching((e) => e instanceof DaffCategoryFilterRequestNameMismatch);
  });

  it('should throw an error if the filter type and request type do not match', () => {
    const request: DaffCategoryFilterToggleRequest = categoryFilterToggleRequestRangeNumericFactory.create({
      name: 'color',
      value: {
        min: 0,
        max: 20,
      },
    });

    expect(() => {
      daffToggleFilter(request, colorFilter);
    }).toThrowMatching((e) => e instanceof DaffCategoryFilterRequestTypeMismatch);
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
    }).toThrowMatching((e) => e instanceof DaffCategoryUnknownFilterType);
  });
});
