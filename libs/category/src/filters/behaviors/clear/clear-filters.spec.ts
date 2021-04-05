import { DaffCategoryFilterEqualFactory, DaffCategoryFilterRangeNumericFactory } from "@daffodil/category/testing";
import { Dict } from "@daffodil/core";

import { DaffCategoryFilter } from "../../../models/public_api";
import { daffClearFilters } from "./clear-filters";

describe('@daffodil/category | filters | behaviors | clear | daffClearFilters', () => {
	it('should clear all filters provided', () => {
		let colorFilter = new DaffCategoryFilterEqualFactory().create({
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
		let priceFilter = new DaffCategoryFilterRangeNumericFactory().create({
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
    const filters: Dict<DaffCategoryFilter> = {
			'color': colorFilter,
			'price': priceFilter,
    };
		const expected: Dict<DaffCategoryFilter> = {
			...filters,
			'color': {
				...colorFilter,
				options: {
					...colorFilter.options,
					red: {
						...colorFilter.options['red'],
						applied: false,
					},
					blue: {
						...colorFilter.options['blue'],
						applied: false,
					},
				},
			},
			'price': {
				...priceFilter,
				options: {},
			}
    };

		expect(daffClearFilters(filters)).toEqual(expected);
  });
});