import { DaffCategoryFilterEqualFactory, DaffCategoryFilterRequestEqualFactory } from '@daffodil/category/testing';
import {
  DaffCategoryFilterEqualRequest,
  DaffCategoryEqualFilter,
} from '../../../../../models/public_api';
import { daffApplyFilterEqual } from './apply';

describe('@daffodil/category | filters | type | equal | behaviors | apply', () => {

	let filter: DaffCategoryEqualFilter;

	beforeEach(() => {
		filter = new DaffCategoryFilterEqualFactory().create({
      name: 'color',
      options: {
				red: {
          applied: false,
          value: 'red',
        },
        blue: {
          applied: false,
          value: 'blue',
        },
			},
    });
	});

  it('should not apply any option that does not equal the request value', () => {
    const request: DaffCategoryFilterEqualRequest = new DaffCategoryFilterRequestEqualFactory().create({
      name: 'not color',
      value: ['clear'],
    });

    expect(daffApplyFilterEqual(request, filter)).toEqual(filter);
  });

  it('should apply an option that does equal the request value', () => {
    const request: DaffCategoryFilterEqualRequest = new DaffCategoryFilterRequestEqualFactory().create({
      name: 'color',
      value: ['red'],
    });

    let expected: DaffCategoryEqualFilter = {
			...filter,
      options: {
				...filter.options,
				red: {
					...filter.options['red'],
          applied: true,
        },
			},
    };

    expect(daffApplyFilterEqual(request, filter)).toEqual(expected);
  });

  it('should apply multiple options if they equal the request values', () => {
    const request: DaffCategoryFilterEqualRequest = new DaffCategoryFilterRequestEqualFactory().create({
      name: 'color',
      value: ['red', 'blue'],
    });

    let expected: DaffCategoryEqualFilter = {
			...filter,
      options: {
				...filter.options,
				red: {
					...filter.options['red'],
          applied: true,
        },
				blue: {
					...filter.options['blue'],
          applied: true,
        },
			},
    };

    expect(daffApplyFilterEqual(request, filter)).toEqual(expected);
  });

	it('should not change existing applied options of the filter', () => {
		filter.options['red'].applied = true;
		const request: DaffCategoryFilterEqualRequest = new DaffCategoryFilterRequestEqualFactory().create({
      name: 'color',
      value: ['red'],
    });

		expect(daffApplyFilterEqual(request, filter)).toEqual(filter);
	});
});
