import { Dict } from "@daffodil/core";

import { DaffCategoryFilter, DaffCategoryFilterType } from "../../../models/public_api";
import { daffClearFilters } from "./clear-filters";

describe('@daffodil/category | filters | behaviors | clear | daffClearFilters', () => {
	it('should clear all filters provided', () => {
    const filters: Dict<DaffCategoryFilter> = {
			'color': {
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
			},
			'price': {
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
			}
    };
		const expected: Dict<DaffCategoryFilter> = {
			'color': {
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
			},
			'price': {
				type: DaffCategoryFilterType.RangeNumeric,
				name: 'price',
				label: 'price',
				min: 0,
				max: 200,
				options: {}
			}
    };

		expect(daffClearFilters(filters)).toEqual(expected);
  });
});