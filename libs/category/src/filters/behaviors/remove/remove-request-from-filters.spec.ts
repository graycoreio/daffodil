import { Dict } from "@daffodil/core";
import { DaffCategoryEqualFilter, DaffCategoryFilter, DaffCategoryFilterEqualRequest, DaffCategoryFilterType } from "../../../models/public_api";
import { daffRemoveRequestFromFilters } from "./remove-request-from-filters";

describe('@daffodil/category | filters | behaviors | remove | daffRemoveRequestFromFilters', () => {
	it('should remove filters in a filter request', () => {
		const filters: Dict<DaffCategoryEqualFilter> = {
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
			}
    };
		const request: DaffCategoryFilterEqualRequest = {
      type: DaffCategoryFilterType.Equal,
      name: 'color',
      value: ['red'],
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
						applied: true,
						value: 'blue',
						label: 'Blue',
						count: 2,
					},
				},
			}
    };

		expect(daffRemoveRequestFromFilters(request, filters)).toEqual(expected);
  });

	it('should throw an error if the filter name does not exist', () => {
		const filters: Dict<DaffCategoryEqualFilter> = {
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
			}
    };
		const request: DaffCategoryFilterEqualRequest = {
      type: DaffCategoryFilterType.Equal,
      name: 'size',
      value: ['medium'],
    };

		expect(() => {
			daffRemoveRequestFromFilters(request, filters)
		}).toThrowError();
	});
});
