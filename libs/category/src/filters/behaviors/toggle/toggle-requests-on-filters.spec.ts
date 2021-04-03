import { Dict } from "@daffodil/core";
import { DaffCategoryFilter, DaffCategoryFilterType, DaffToggleCategoryFilterRequest } from "../../../models/public_api";
import { daffToggleRequestsOnFilters } from "./toggle-requests-on-filters";

describe('@daffodil/category | filters | behaviors | toggle | daffToggleRequestsOnFilters', () => {

	let originalFilters: Dict<DaffCategoryFilter>;

	beforeEach(() => {
		originalFilters	= {
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
			'size': {
				type: DaffCategoryFilterType.Equal,
				label: 'Size',
				name: 'size',
				options: {
					small: {
						applied: false,
						value: 'small',
						label: 'Small',
						count: 2,
					},
					medium: {
						applied: false,
						value: 'medium',
						label: 'Medium',
						count: 2,
					},
				},
			}
    };
	});

  it('should not toggle any filters if there are no filter requests', () => {
		const requests: DaffToggleCategoryFilterRequest[] = [];
		
		expect(daffToggleRequestsOnFilters(requests, originalFilters)).toEqual(originalFilters);
  });

  it('should throw an error if there are no requests that match', () => {
		const requests: DaffToggleCategoryFilterRequest[] = [
			{
				type: DaffCategoryFilterType.Equal,
				name: 'someFilter',
				value: 'someFilter value',
			}
		];

		expect(() => {
			daffToggleRequestsOnFilters(requests, originalFilters)
		}).toThrowError();
  });

  it('should toggle a filter if there is a request that matches', () => {
		const requests: DaffToggleCategoryFilterRequest[] = [
			{
				type: DaffCategoryFilterType.Equal,
				name: 'color',
				value: 'red',
			}
		];
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
			},
			'size': {
				type: DaffCategoryFilterType.Equal,
				label: 'Size',
				name: 'size',
				options: {
					small: {
						applied: false,
						value: 'small',
						label: 'Small',
						count: 2,
					},
					medium: {
						applied: false,
						value: 'medium',
						label: 'Medium',
						count: 2,
					},
				},
			}
    };

		expect(daffToggleRequestsOnFilters(requests, originalFilters)).toEqual(expected);
  });

  it('should toggle multiple filters if there are multiple requests that match', () => {
		const requests: DaffToggleCategoryFilterRequest[] = [
			{
				type: DaffCategoryFilterType.Equal,
				name: 'color',
				value: 'red',
			},
			{
				type: DaffCategoryFilterType.Equal,
				name: 'size',
				value: 'small',
			}
		];
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
			},
			'size': {
				type: DaffCategoryFilterType.Equal,
				label: 'Size',
				name: 'size',
				options: {
					small: {
						applied: true,
						value: 'small',
						label: 'Small',
						count: 2,
					},
					medium: {
						applied: false,
						value: 'medium',
						label: 'Medium',
						count: 2,
					},
				},
			}
    };

		expect(daffToggleRequestsOnFilters(requests, originalFilters)).toEqual(expected);
  });
});
