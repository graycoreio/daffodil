import { DaffCategoryFilterRequestEqualFactory } from "@daffodil/category/testing";
import { DaffCategoryEqualFilter, DaffCategoryFilterEqualRequest, DaffCategoryFilterType } from "../../../../../models/public_api";
import { daffRemoveFilterEqual } from "./remove";

describe('@daffodil/category | filters | type | equal | behaviors | remove', () => {

	let filter: DaffCategoryEqualFilter;

	beforeEach(() => {
		filter = {
      type: DaffCategoryFilterType.Equal,
      label: 'Color',
      name: 'color',
      options: {
				red: {
          applied: true,
          value: 'red',
          label: 'Red',
          count: 2,
        },
        blue: {
          applied: true,
          value: 'blue',
          label: 'Blue',
          count: 2,
        },
			},
    };
	});

	it('should unapply an option that equals the request value', () => {
		const request: DaffCategoryFilterEqualRequest = new DaffCategoryFilterRequestEqualFactory().create({
      name: 'color',
      value: ['red'],
    });
		const expected: DaffCategoryEqualFilter = {
			...filter,
      options: {
				...filter.options,
				red: {
					...filter.options['red'],
          applied: false,
        },
			},
    };

		expect(daffRemoveFilterEqual(request, filter)).toEqual(expected);
  });

  it('should not change the filter if the request value is not on the filter', () => {
		const request: DaffCategoryFilterEqualRequest = new DaffCategoryFilterRequestEqualFactory().create({
      name: 'not color',
      value: ['clear'],
    });

		expect(daffRemoveFilterEqual(request, filter)).toEqual(filter);
  });

  it('should unapply multiple options if they equal the request values', () => {
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
          applied: false,
        },
        blue: {
					...filter.options['blue'],
          applied: false,
        },
			},
    };

    expect(daffRemoveFilterEqual(request, filter)).toEqual(expected);
  });

	it('should not change options of the filter that are already unapplied', () => {
		filter.options['red'].applied = false;
		const request: DaffCategoryFilterEqualRequest = new DaffCategoryFilterRequestEqualFactory().create({
      name: 'color',
      value: ['red'],
    });

		expect(daffRemoveFilterEqual(request, filter)).toEqual(filter);
	});
});
