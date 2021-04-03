import { Dict } from "@daffodil/core";
import { DaffCategoryEqualFilter, DaffCategoryFilter, DaffCategoryFilterEqualRequest, DaffCategoryFilterType } from "../../../models/public_api";
import { daffRemoveRequestsFromFilters } from "./remove-requests-from-filters";

describe('@daffodil/category | filters | behaviors | remove | daffRemoveRequestsFromFilters', () => {

	let originalFilters: Dict<DaffCategoryEqualFilter>;

	beforeEach(() => {
		originalFilters	= {
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
						applied: true,
						value: 'medium',
						label: 'Medium',
						count: 2,
					},
				},
			}
    };
	});

  it('should not remove any filters if there are no filter requests', () => {
		const requests: DaffCategoryFilterEqualRequest[] = [];
		
		expect(daffRemoveRequestsFromFilters(requests, originalFilters)).toEqual(originalFilters);
  });

  it('should throw an error if there are no requests that match', () => {
		const requests: DaffCategoryFilterEqualRequest[] = [
			{
				type: DaffCategoryFilterType.Equal,
				name: 'someFilter',
				value: ['someFilter value'],
			}
		];

		expect(() => {
			daffRemoveRequestsFromFilters(requests, originalFilters)
		}).toThrowError();
  });

  it('should remove a filter if there are requests that match', () => {
		const requests: DaffCategoryFilterEqualRequest[] = [
			{
				type: DaffCategoryFilterType.Equal,
				name: 'color',
				value: ['red'],
			}
		];
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
						applied: true,
						value: 'medium',
						label: 'Medium',
						count: 2,
					},
				},
			}
    };

		expect(daffRemoveRequestsFromFilters(requests, originalFilters)).toEqual(expected);
  });

  it('should apply multiple filters if there are multiple requests that match', () => {
		const requests: DaffCategoryFilterEqualRequest[] = [
			{
				type: DaffCategoryFilterType.Equal,
				name: 'color',
				value: ['red'],
			},
			{
				type: DaffCategoryFilterType.Equal,
				name: 'size',
				value: ['small'],
			}
		];
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
						applied: true,
						value: 'medium',
						label: 'Medium',
						count: 2,
					},
				},
			}
    };

		expect(daffRemoveRequestsFromFilters(requests, originalFilters)).toEqual(expected);
  });
});
