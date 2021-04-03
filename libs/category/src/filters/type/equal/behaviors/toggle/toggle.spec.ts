import { DaffCategoryEqualFilter, DaffCategoryFilterType, DaffToggleCategoryFilterEqualRequest } from "../../../../../models/public_api";
import { daffToggleFilterEqual } from "./toggle";

describe('@daffodil/category | filters | type | equal | behaviors | toggle', () => {
	
	let originalFilter: DaffCategoryEqualFilter;

	beforeEach(() => {
		originalFilter = {
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
		};
	});

	it('should not toggle an option that does not equal the request value', () => {
		const request: DaffToggleCategoryFilterEqualRequest = {
			type: DaffCategoryFilterType.Equal,
			name: 'not color',
			value: 'clear',
		};

		expect(daffToggleFilterEqual(request, originalFilter)).toEqual(originalFilter);
	});

	it('should toggle an option that does equal the request value', () => {
		const request: DaffToggleCategoryFilterEqualRequest = {
			type: DaffCategoryFilterType.Equal,
			name: 'color',
			value: 'red',
		};

		let expected: DaffCategoryEqualFilter = {
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
		};

		expect(daffToggleFilterEqual(request, originalFilter)).toEqual(expected);
	});
});
