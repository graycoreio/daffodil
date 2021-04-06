import { TestBed } from "@angular/core/testing";
import { DaffCategoryFilterEqualFactory, DaffCategoryFilterToggleRequestEqualFactory } from "@daffodil/category/testing";
import { Dict } from "@daffodil/core";
import { DaffCategoryEqualFilter, DaffCategoryFilter, DaffToggleCategoryFilterRequest } from "../../../models/public_api";
import { daffToggleRequestsOnFilters } from "./toggle-requests-on-filters";

describe('@daffodil/category | filters | behaviors | toggle | daffToggleRequestsOnFilters', () => {
	let categoryFilterEqualFactory: DaffCategoryFilterEqualFactory;
	let categoryFilterToggleRequestEqualFactory: DaffCategoryFilterToggleRequestEqualFactory;
	let colorFilter: DaffCategoryEqualFilter;
	let sizeFilter: DaffCategoryEqualFilter;
	let filters: Dict<DaffCategoryFilter>;
	
	beforeEach(() => {
		TestBed.configureTestingModule({});
	
		categoryFilterEqualFactory = TestBed.inject(DaffCategoryFilterEqualFactory);
		categoryFilterToggleRequestEqualFactory = TestBed.inject(DaffCategoryFilterToggleRequestEqualFactory);
		colorFilter = categoryFilterEqualFactory.create({
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
		sizeFilter = categoryFilterEqualFactory.create({
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
	});

  it('should not toggle any filters if there are no filter requests', () => {
		const requests: DaffToggleCategoryFilterRequest[] = [];
		
		expect(daffToggleRequestsOnFilters(requests, filters)).toEqual(filters);
  });

  it('should throw an error if there are no requests that match', () => {
		const requests: DaffToggleCategoryFilterRequest[] = [
			categoryFilterToggleRequestEqualFactory.create({
				name: 'someFilter',
				value: 'someFilter value',
			}),
		];

		expect(() => {
			daffToggleRequestsOnFilters(requests, filters)
		}).toThrowError();
  });

  it('should toggle a filter if there is a request that matches', () => {
		const requests: DaffToggleCategoryFilterRequest[] = [
			categoryFilterToggleRequestEqualFactory.create({
				name: 'color',
				value: 'red',
			}),
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
			}
    };

		expect(daffToggleRequestsOnFilters(requests, filters)).toEqual(expected);
  });

  it('should toggle multiple filters if there are multiple requests that match', () => {
		const requests: DaffToggleCategoryFilterRequest[] = [
			categoryFilterToggleRequestEqualFactory.create({
				name: 'color',
				value: 'red',
			}),
			categoryFilterToggleRequestEqualFactory.create({
				name: 'size',
				value: 'small',
			})
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
			},
    };

		expect(daffToggleRequestsOnFilters(requests, filters)).toEqual(expected);
  });
});
