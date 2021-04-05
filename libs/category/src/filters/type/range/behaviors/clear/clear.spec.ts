import { DaffCategoryFilterRangeNumericFactory } from "@daffodil/category/testing";
import { DaffCategoryFilter } from "../../../../../models/public_api";
import { daffClearFilterRange } from "./clear";

describe('@daffodil/category | filters | type | range | behaviors | clear', () => {
  it('should remove any currently applied filter options.', () => {
		const filter: DaffCategoryFilter = new DaffCategoryFilterRangeNumericFactory().create({
      name: 'price',
      min: 0,
      max: 20,
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
		
		expect(daffClearFilterRange(filter)).toEqual(expected);
  });

  it('should do nothing if there are no options currently applied', () => {
		const filter: DaffCategoryFilter = new DaffCategoryFilterRangeNumericFactory().create({
      name: 'price',
      min: 0,
      max: 20,
      options: {},
    });

		expect(daffClearFilterRange(filter)).toEqual(filter);
  });
});
