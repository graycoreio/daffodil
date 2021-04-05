import { DaffCategoryFilterEqualFactory, DaffCategoryFilterRequestEqualFactory } from "@daffodil/category/testing";
import { Dict } from "@daffodil/core";
import { DaffCategoryEqualFilter, DaffCategoryFilter, DaffCategoryFilterEqualRequest } from "../../../models/public_api";
import { daffRemoveRequestFromFilters } from "./remove-request-from-filters";

describe('@daffodil/category | filters | behaviors | remove | daffRemoveRequestFromFilters', () => {

	let colorFilter: DaffCategoryEqualFilter;
	let filters: Dict<DaffCategoryEqualFilter>;

	beforeEach(() => {
		colorFilter = new DaffCategoryFilterEqualFactory().create({
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
		filters = {
			'color': colorFilter
    };
	});

	it('should remove filters in a filter request', () => {
		const request: DaffCategoryFilterEqualRequest = new DaffCategoryFilterRequestEqualFactory().create({
      name: 'color',
      value: ['red'],
    });
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
				},
			}
    };

		expect(daffRemoveRequestFromFilters(request, filters)).toEqual(expected);
  });

	it('should throw an error if the filter name does not exist', () => {
		const request: DaffCategoryFilterEqualRequest = new DaffCategoryFilterRequestEqualFactory().create({
      name: 'size',
      value: ['medium'],
    });

		expect(() => {
			daffRemoveRequestFromFilters(request, filters)
		}).toThrowError();
	});
});
