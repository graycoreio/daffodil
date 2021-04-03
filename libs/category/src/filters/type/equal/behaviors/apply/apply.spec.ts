import {
  DaffCategoryFilterEqualRequest,
  DaffCategoryFilterType,
  DaffCategoryEqualFilter,
} from '../../../../../models/public_api';
import { daffApplyFilterEqual } from './apply';

describe('@daffodil/category | filters | type | equal | behaviors | apply', () => {

	let originalFilter: DaffCategoryEqualFilter;

	beforeEach(() => {
		originalFilter = {
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
	});

  it('should not apply any option that does not equal the request value', () => {
    const request: DaffCategoryFilterEqualRequest = {
      type: DaffCategoryFilterType.Equal,
      name: 'not color',
      value: ['clear'],
    };

    expect(daffApplyFilterEqual(request, originalFilter)).toEqual(originalFilter);
  });

  it('should apply an option that does equal the request value', () => {
    const request: DaffCategoryFilterEqualRequest = {
      type: DaffCategoryFilterType.Equal,
      name: 'color',
      value: ['red'],
    };

    let expected: DaffCategoryEqualFilter = {
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
          applied: false,
          value: 'blue',
          label: 'Blue',
          count: 2,
        },
			},
    };

    expect(daffApplyFilterEqual(request, originalFilter)).toEqual(expected);
  });

  it('should apply multiple options if they equal the request values', () => {
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

    expect(daffApplyFilterEqual(request, originalFilter)).toEqual(expected);
  });

	it('should not change existing applied options of the filter', () => {
		originalFilter.options['red'].applied = true;
		const request: DaffCategoryFilterEqualRequest = {
      type: DaffCategoryFilterType.Equal,
      name: 'color',
      value: ['red'],
    };

		expect(daffApplyFilterEqual(request, originalFilter)).toEqual(originalFilter);
	});
});
