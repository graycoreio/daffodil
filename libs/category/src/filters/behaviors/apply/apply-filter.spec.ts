import { DaffCategoryFilterEqualFactory, DaffCategoryFilterRangeNumericFactory, DaffCategoryFilterRequestEqualFactory, DaffCategoryFilterRequestRangeNumericFactory } from "@daffodil/category/testing";
import { DaffCategoryEqualFilter, DaffCategoryFilter, DaffCategoryFilterEqualRequest, DaffCategoryFilterRangeRequest, DaffCategoryFilterType } from "../../../models/public_api";
import { DaffCategoryFilterRequestNameMismatch } from "../../errors/request-name-mismatch.error";
import { DaffCategoryFilterRequestTypeMismatch } from "../../errors/request-type-mismatch.error";
import { DaffCategoryUnknownFilterType } from "../../errors/unknown-filter-type.error";
import { daffApplyFilter } from "./apply-filter";

describe('@daffodil/category | filters | behaviors | apply | daffApplyFilter', () => {
  it('should apply an equal filter request', () => {
		const filter: DaffCategoryEqualFilter = new DaffCategoryFilterEqualFactory().create({
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
          applied: true,
        },
			},
    };

		expect(daffApplyFilter(request, filter)).toEqual(expected);
  });

  it('should apply a range filter request', () => {
		const request: DaffCategoryFilterRangeRequest = new DaffCategoryFilterRequestRangeNumericFactory().create({
      name: 'price',
      value: {
        min: 0,
        max: 20,
      },
    });

    const filter: DaffCategoryFilter = new DaffCategoryFilterRangeNumericFactory().create({
      name: 'price',
      min: 0,
      max: 200,
    });

    const expected: DaffCategoryFilter = {
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
		const filter: DaffCategoryEqualFilter = new DaffCategoryFilterEqualFactory().create({
      name: 'not color',
      options: {
				clear: {
          applied: false,
          value: 'clear',
        },
			},
    });
		const request: DaffCategoryFilterEqualRequest = new DaffCategoryFilterRequestEqualFactory().create({
      name: 'color',
      value: ['clear'],
    });

		expect(() => {
			daffApplyFilter(request, filter)
		}).toThrow(new DaffCategoryFilterRequestNameMismatch('Filter names aren\'t equal'));
	});

  it('should throw an error if the filter type and request type do not match', () => {
		const filter: DaffCategoryEqualFilter = new DaffCategoryFilterEqualFactory().create({
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

    const request: DaffCategoryFilterRangeRequest = new DaffCategoryFilterRequestRangeNumericFactory().create({
      type: DaffCategoryFilterType.RangeNumeric,
      name: 'color',
      value: {
        min: 0,
        max: 20,
      },
    });

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
			daffApplyFilter(request, filter)
		}).toThrow(new DaffCategoryUnknownFilterType('Unknown filter type'));
	});
});
