import { DaffCategoryFilterEqualFactory, DaffCategoryFilterRangeNumericFactory } from "@daffodil/category/testing";
import { DaffCategoryEqualFilter, DaffCategoryFilter } from "../../../models/public_api";
import { DaffCategoryUnknownFilterType } from "../../errors/unknown-filter-type.error";
import { daffClearFilter } from "./clear-filter";

describe('@daffodil/category | filters | behaviors | clear | daffClearFilter', () => {
  it('should clear a given range filter', () => {
    const filter: DaffCategoryFilter = new DaffCategoryFilterRangeNumericFactory().create({
      name: 'price',
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
    });
    const expected: DaffCategoryFilter = {
			...filter,
      options: {},
    };

		expect(daffClearFilter(filter)).toEqual(expected);
  });

  it('should clear a given equal filter', () => {
    const filter: DaffCategoryEqualFilter = new DaffCategoryFilterEqualFactory().create({
      name: 'color',
      options: {
				red: {
          applied: true,
          value: 'red',
        },
        blue: {
          applied: true,
          value: 'blue',
        },
			},
    });
		const expected: DaffCategoryEqualFilter = {
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

    expect(daffClearFilter(filter)).toEqual(expected);
  });

	it('should throw an error if given filter has an unknown type', () => {
		const filter: any = {
      type: 'some filter type',
      label: 'Color',
      name: 'color',
      options: {},
    };

		expect(() => {
			daffClearFilter(filter)
		}).toThrow(new DaffCategoryUnknownFilterType('Unknown filter type'));
	});
});
