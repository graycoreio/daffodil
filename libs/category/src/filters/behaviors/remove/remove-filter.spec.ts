import { DaffCategoryEqualFilter, DaffCategoryFilter, DaffCategoryFilterEqualRequest, DaffCategoryFilterRangeRequest, DaffCategoryFilterType } from "../../../models/public_api";
import { DaffCategoryFilterRequestNameMismatch } from "../../errors/request-name-mismatch.error";
import { DaffCategoryFilterRequestTypeMismatch } from "../../errors/request-type-mismatch.error";
import { DaffCategoryUnknownFilterType } from "../../errors/unknown-filter-type.error";
import { daffRemoveFilter } from "./remove-filter";

describe('@daffodil/category | filters | behaviors | remove | daffRemoveFilter', () => {
  it('should remove an equal request', () => {
		const filter: DaffCategoryEqualFilter = {
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
          applied: false,
          value: 'blue',
          label: 'Blue',
          count: 2,
        },
			},
    };

		expect(daffRemoveFilter(request, filter)).toEqual(expected);
  });
		
  it('should remove a range request', () => {
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

    const expected: DaffCategoryFilter = {
      type: DaffCategoryFilterType.RangeNumeric,
      name: 'price',
      label: 'price',
      min: 0,
      max: 200,
      options: {},
    };

    expect(daffRemoveFilter(request, filter)).toEqual(expected);
  });
	
  it('should throw an error if a request has a different name than the filter', () => {
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
			daffRemoveFilter(request, filter)
		}).toThrow(new DaffCategoryFilterRequestNameMismatch('Filter names aren\'t equal'));
	});

	it('should throw an error if a request has a different type than the filter', () => {
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
			daffRemoveFilter(request, filter)
		}).toThrow(new DaffCategoryFilterRequestTypeMismatch('Filter types aren\'t equal'));
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
			daffRemoveFilter(request, filter)
		}).toThrow(new DaffCategoryUnknownFilterType('Unknown filter type'));
	});
});
