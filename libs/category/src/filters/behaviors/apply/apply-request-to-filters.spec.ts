import { DaffCategoryFilterEqualFactory, DaffCategoryFilterRequestEqualFactory } from "@daffodil/category/testing";
import { Dict } from "@daffodil/core";
import { DaffCategoryEqualFilter, DaffCategoryFilter, DaffCategoryFilterEqualRequest } from "../../../models/public_api";
import { daffApplyRequestToFilters } from "./apply-request-to-filters";

describe('@daffodil/category | filters | behaviors | apply | daffApplyRequestToFilters', () => {

	let colorFilter: DaffCategoryEqualFilter;
	let filters: Dict<DaffCategoryEqualFilter>;

	beforeEach(() => {
		colorFilter = new DaffCategoryFilterEqualFactory().create({
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
		filters = {
			'color': colorFilter,
    };
	});

  it('should apply a filter request', () => {
		const request: DaffCategoryFilterEqualRequest = new DaffCategoryFilterRequestEqualFactory().create({
      name: 'color',
      value: ['red'],
    });
		const expected: Dict<DaffCategoryFilter> = {
			'color': {
				...colorFilter,
				options: {
					...colorFilter.options,
					red: {
						...colorFilter.options['red'],
						applied: true,
					},
				},
			}
    };

		expect(daffApplyRequestToFilters(request, filters)).toEqual(expected);
  });

	it('should throw an error if the filter name does not exist', () => {
		const request: DaffCategoryFilterEqualRequest = new DaffCategoryFilterRequestEqualFactory().create({
      name: 'size',
      value: ['medium'],
    });

		expect(() => {
			daffApplyRequestToFilters(request, filters)
		}).toThrowError();
	});
});
