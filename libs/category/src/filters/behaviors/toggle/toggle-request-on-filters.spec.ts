import { DaffCategoryFilterEqualFactory, DaffCategoryFilterToggleRequestEqualFactory } from "@daffodil/category/testing";
import { Dict } from "@daffodil/core";
import { DaffCategoryEqualFilter, DaffCategoryFilter, DaffCategoryFilterType, DaffToggleCategoryFilterEqualRequest } from "../../../models/public_api";
import { daffToggleRequestOnFilters } from "./toggle-request-on-filters";

describe('@daffodil/category | filters | behaviors | toggle | daffApplyRequestToFilters', () => {

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
			color: colorFilter,
		};
	});

  it('should apply a toggle request', () => {
		const request: DaffToggleCategoryFilterEqualRequest = new DaffCategoryFilterToggleRequestEqualFactory().create({
      type: DaffCategoryFilterType.Equal,
      name: 'color',
      value: 'red',
    });
		const expected: Dict<DaffCategoryFilter> = {
			...filters,
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

		expect(daffToggleRequestOnFilters(request, filters)).toEqual(expected);
  });

  it('should throw an error if the request does not match a known filter name', () => {
		const request: DaffToggleCategoryFilterEqualRequest = new DaffCategoryFilterToggleRequestEqualFactory().create({
      name: 'size',
    });

		expect(() => {
			daffToggleRequestOnFilters(request, filters)
		}).toThrowError();
  });
});
