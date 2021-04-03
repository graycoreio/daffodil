import { Dict } from "@daffodil/core";
import { DaffCategoryEqualFilter, DaffCategoryFilter, DaffCategoryFilterType, DaffToggleCategoryFilterEqualRequest } from "../../../models/public_api";
import { daffToggleRequestOnFilters } from "./toggle-request-on-filters";

describe('@daffodil/category | filters | behaviors | toggle | daffApplyRequestToFilters', () => {
  it('should apply a toggle request', () => {
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
		const request: DaffToggleCategoryFilterEqualRequest = {
      type: DaffCategoryFilterType.Equal,
      name: 'color',
      value: 'red',
    };
		const expected: Dict<DaffCategoryFilter> = {
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
						applied: false,
						value: 'blue',
						label: 'Blue',
						count: 2,
					},
				},
			}
    };

		expect(daffToggleRequestOnFilters(request, filters)).toEqual(expected);
  });

  it('should throw an error if the request does not match a known filter name', () => {
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
		const request: DaffToggleCategoryFilterEqualRequest = {
      type: DaffCategoryFilterType.Equal,
      name: 'size',
      value: 'medium',
    };

		expect(() => {
			daffToggleRequestOnFilters(request, filters)
		}).toThrowError();
  });
});
