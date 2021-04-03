import { DaffCategoryEqualFilter, DaffCategoryFilterEqualRequest, DaffCategoryFilterType } from "../../../../../models/public_api";
import { daffRemoveFilterEqual } from "./remove";

describe('@daffodil/category | filters | type | equal | behaviors | remove', () => {

	let originalFilter: DaffCategoryEqualFilter;

	beforeEach(() => {
		originalFilter = {
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
		const request: DaffCategoryFilterEqualRequest = {
      type: DaffCategoryFilterType.Equal,
      name: 'color',
      value: ['red'],
    };
		const expected: DaffCategoryEqualFilter = {
      type: DaffCategoryFilterType.Equal,
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
          applied: true,
          value: 'blue',
          label: 'Blue',
          count: 2,
        },
			},
    };

		expect(daffRemoveFilterEqual(request, originalFilter)).toEqual(expected);
  });

  it('should not change the filter if the request value is not on the filter', () => {
		const request: DaffCategoryFilterEqualRequest = {
      type: DaffCategoryFilterType.Equal,
      name: 'not color',
      value: ['clear'],
    };

		expect(daffRemoveFilterEqual(request, originalFilter)).toEqual(originalFilter);
  });

  it('should unapply multiple options if they equal the request values', () => {
    const request: DaffCategoryFilterEqualRequest = {
      type: DaffCategoryFilterType.Equal,
      name: 'color',
      value: ['red', 'blue'],
    };

    let expected: DaffCategoryEqualFilter = {
      type: DaffCategoryFilterType.Equal,
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

    expect(daffRemoveFilterEqual(request, originalFilter)).toEqual(expected);
  });

	it('should not change options of the filter that are already unapplied', () => {
		originalFilter.options['red'].applied = false;
		const request: DaffCategoryFilterEqualRequest = {
      type: DaffCategoryFilterType.Equal,
      name: 'color',
      value: ['red'],
    };

		expect(daffRemoveFilterEqual(request, originalFilter)).toEqual(originalFilter);
	});
});
