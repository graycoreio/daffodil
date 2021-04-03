import { DaffCategoryEqualFilter, DaffCategoryFilter, DaffCategoryFilterType } from "../../../models/public_api";
import { DaffCategoryUnknownFilterType } from "../../errors/unknown-filter-type.error";
import { daffClearFilter } from "./clear-filter";

describe('@daffodil/category | filters | behaviors | clear | daffClearFilter', () => {
  it('should clear a given range filter', () => {
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

		expect(daffClearFilter(filter)).toEqual(expected);
  });

  it('should clear a given equal filter', () => {
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
          applied: true,
          value: 'blue',
          label: 'Blue',
          count: 2,
        },
			},
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
