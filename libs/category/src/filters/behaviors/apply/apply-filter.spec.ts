import { DaffCategoryEqualFilter, DaffCategoryFilter, DaffCategoryFilterEqualRequest, DaffCategoryFilterRangeRequest, DaffCategoryFilterType } from "../../../models/public_api";
import { DaffCategoryFilterRequestNameMismatch } from "../../errors/request-name-mismatch.error";
import { DaffCategoryFilterRequestTypeMismatch } from "../../errors/request-type-mismatch.error";
import { DaffCategoryUnknownFilterType } from "../../errors/unknown-filter-type.error";
import { daffApplyFilter } from "./apply-filter";

describe('@daffodil/category | filters | behaviors | apply | daffApplyFilter', () => {
  it('should apply an equal filter request', () => {
		const filter: DaffCategoryEqualFilter = {
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

		expect(daffApplyFilter(request, filter)).toEqual(expected);
  });

  it('should apply a range filter request', () => {
		const request: DaffCategoryFilterRangeRequest = {
      type: DaffCategoryFilterType.RangeNumeric,
      name: 'price',
      value: {
        min: 0,
        max: 20,
      },
    };

    const filter: DaffCategoryFilter = {
      type: DaffCategoryFilterType.RangeNumeric,
      name: 'price',
      label: 'price',
      min: 0,
      max: 200,
      options: {},
    };

    const expected: DaffCategoryFilter = {
      type: DaffCategoryFilterType.RangeNumeric,
      name: 'price',
      label: 'price',
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
    };

    expect(daffApplyFilter(request, filter)).toEqual(expected);
  });

	it('should throw an error if the filter name and request names do not match', () => {
		const filter: DaffCategoryEqualFilter = {
      type: DaffCategoryFilterType.Equal,
      label: 'Not Color',
      name: 'not color',
      options: {
				clear: {
          applied: false,
          value: 'clear',
          label: 'Clear',
          count: 2,
        },
			},
    };
		const request: DaffCategoryFilterEqualRequest = {
      type: DaffCategoryFilterType.Equal,
      name: 'color',
      value: ['clear'],
    };

		expect(() => {
			daffApplyFilter(request, filter)
		}).toThrow(new DaffCategoryFilterRequestNameMismatch('Filter names aren\'t equal'));
	});

  it('should throw an error if the filter type and request type do not match', () => {
		const filter: DaffCategoryEqualFilter = {
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

    const request: DaffCategoryFilterRangeRequest = {
      type: DaffCategoryFilterType.RangeNumeric,
      name: 'color',
      value: {
        min: 0,
        max: 20,
      },
    };

		expect(() => {
			daffApplyFilter(request, filter)
		}).toThrow(new DaffCategoryFilterRequestTypeMismatch('Filter types aren\'t equal'));
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
			daffApplyFilter(request, filter)
		}).toThrow(new DaffCategoryUnknownFilterType('Unknown filter type'));
	});
});
