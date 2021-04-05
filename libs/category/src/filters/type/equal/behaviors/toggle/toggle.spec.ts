import { DaffCategoryFilterEqualFactory, DaffCategoryFilterToggleRequestEqualFactory } from "@daffodil/category/testing";
import { DaffCategoryEqualFilter, DaffToggleCategoryFilterEqualRequest } from "../../../../../models/public_api";
import { daffToggleFilterEqual } from "./toggle";

describe('@daffodil/category | filters | type | equal | behaviors | toggle', () => {
	
	let filter: DaffCategoryEqualFilter;

	beforeEach(() => {
		filter = new DaffCategoryFilterEqualFactory().create({
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
	});

	it('should not toggle an option that does not equal the request value', () => {
		const request: DaffToggleCategoryFilterEqualRequest = new DaffCategoryFilterToggleRequestEqualFactory().create({
			name: 'not color',
			value: 'clear',
		});

		expect(daffToggleFilterEqual(request, filter)).toEqual(filter);
	});

	it('should toggle an option that does equal the request value', () => {
		const request: DaffToggleCategoryFilterEqualRequest = new DaffCategoryFilterToggleRequestEqualFactory().create({
			name: 'color',
			value: 'red',
		});

		let expected: DaffCategoryEqualFilter = {
			...filter,
			options: {
				...filter.options,
				red: {
					...filter.options['red'],
					applied: true,
				},
			},
		};

		expect(daffToggleFilterEqual(request, filter)).toEqual(expected);
	});
});
