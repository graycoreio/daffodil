import { DaffCategoryFilterEqualFactory, DaffCategoryFilterRequestEqualFactory } from "@daffodil/category/testing";
import { Dict } from "@daffodil/core";

import { DaffCategoryEqualFilter, DaffCategoryFilter, DaffCategoryFilterEqualRequest } from "../../../models/public_api";
import { daffApplyRequestsToFilters } from "./apply-requests-to-filters";

describe('@daffodil/category | filters | behaviors | apply | daffApplyRequestsToFilters', () => {

	let colorFilter: DaffCategoryEqualFilter;
	let sizeFilter: DaffCategoryEqualFilter;
	let filters: Dict<DaffCategoryEqualFilter>;
	let colorRequest: DaffCategoryFilterEqualRequest;
	let sizeRequest: DaffCategoryFilterEqualRequest;

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
		sizeFilter = new DaffCategoryFilterEqualFactory().create({
			name: 'size',
			options: {
				small: {
					applied: false,
					value: 'small',
				},
				medium: {
					applied: false,
					value: 'medium',
				},
			},
		});
		filters	= {
			'color': colorFilter,
			'size': sizeFilter,
    };
		colorRequest = new DaffCategoryFilterRequestEqualFactory().create({
			name: 'color',
			value: ['red'],
		})
		sizeRequest = new DaffCategoryFilterRequestEqualFactory().create({
			name: 'size',
			value: ['small'],
		})
	});

  it('should not apply any filters if there are no filter requests', () => {
		const requests: DaffCategoryFilterEqualRequest[] = [];
		
		expect(daffApplyRequestsToFilters(requests, filters)).toEqual(filters);
  });

  it('should throw an error if there are no requests that match', () => {
		const requests: DaffCategoryFilterEqualRequest[] = [
			new DaffCategoryFilterRequestEqualFactory().create({
				name: 'someFilter',
				value: ['someFilter value'],
			})
		];

		expect(() => {
			daffApplyRequestsToFilters(requests, filters)
		}).toThrowError();
  });

  it('should apply a filter if there is a request that matches', () => {
		const requests: DaffCategoryFilterEqualRequest[] = [ colorRequest ];
		const expected: Dict<DaffCategoryFilter> = {
			...filters,
			'color': {
				...colorFilter,
				options: {
					...colorFilter.options,
					'red': {
						...colorFilter.options['red'],
						applied: true,
					}
				}
			},
    };

		expect(daffApplyRequestsToFilters(requests, filters)).toEqual(expected);
  });

  it('should apply multiple filters if there are multiple requests that match', () => {
		const requests: DaffCategoryFilterEqualRequest[] = [ 
			colorRequest, 
			sizeRequest,
		];
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
			},
			'size': {
				...sizeFilter,
				options: {
					...sizeFilter.options,
					small: {
						...sizeFilter.options['small'],
						applied: true,
					},
				},
			}
    };

		expect(daffApplyRequestsToFilters(requests, filters)).toEqual(expected);
  });
});
