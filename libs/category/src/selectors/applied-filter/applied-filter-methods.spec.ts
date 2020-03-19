import { DaffCategoryAppliedFilter } from '../../models/category-applied-filter';
import { DaffCategoryFilterType } from '../../models/category-filter-base';
import { DaffCategoryFilter } from '../../models/category-filter';
import { buildAppliedFilter } from './applied-filter-methods';
import { DaffCategoryFilterRequest } from '../../models/requests/filter-request';

describe('Applied Filter Methods', () => {
	
	describe('when the filter request is an equal type with a single option', () => {
		
		it('should return a valid applied filter', () => {
			const availableFilter: DaffCategoryFilter = {
				name: 'name',
				type: DaffCategoryFilterType.Equal,
				label: 'label',
				options: [{
					label: 'option_label',
					value: 'value',
					count: null
				}]
			};
			const filterRequest: DaffCategoryFilterRequest = {
				name: 'name',
				type: DaffCategoryFilterType.Equal,
				value: ['value']
			};
			const expectedAppliedFilter: DaffCategoryAppliedFilter = {
				name: 'name',
				type: DaffCategoryFilterType.Equal,
				label: 'label',
				options: [{
					label: 'option_label',
					value: 'value'
				}]
			};

			expect(buildAppliedFilter(availableFilter, filterRequest)).toEqual(expectedAppliedFilter);
		});
	});
	
	describe('when the filter request is an equal type with multiple options', () => {
		
		it('should return a valid applied filter', () => {
			const availableFilter: DaffCategoryFilter = {
				name: 'name',
				type: DaffCategoryFilterType.Equal,
				label: 'label',
				options: [{
					label: 'option_label',
					value: 'value',
					count: null
				},
				{
					label: 'option_label2',
					value: 'value2',
					count: null
				}]
			};
			const filterRequest: DaffCategoryFilterRequest = {
				name: 'name',
				type: DaffCategoryFilterType.Equal,
				value: ['value', 'value2']
			};
			const expectedAppliedFilter: DaffCategoryAppliedFilter = {
				name: 'name',
				type: DaffCategoryFilterType.Equal,
				label: 'label',
				options: [{
					label: 'option_label',
					value: 'value'
				},
				{
					label: 'option_label2',
					value: 'value2'
				}]
			};

			expect(buildAppliedFilter(availableFilter, filterRequest)).toEqual(expectedAppliedFilter);
		});
	});
	
	describe('when the filter request is a range type with a single option', () => {
		
		it('should return a valid applied filter', () => {
			const availableFilter: DaffCategoryFilter = {
				name: 'name',
				type: DaffCategoryFilterType.Range,
				label: 'label',
				options: [{
					label: 'option_label',
					value: 'value',
					count: null
				}]
			};
			const filterRequest: DaffCategoryFilterRequest = {
				name: 'name',
				type: DaffCategoryFilterType.Range,
				value: ['value']
			};
			const expectedAppliedFilter: DaffCategoryAppliedFilter = {
				name: 'name',
				type: DaffCategoryFilterType.Range,
				label: 'label',
				options: [{
					label: 'option_label',
					value: 'value'
				}]
			};

			expect(buildAppliedFilter(availableFilter, filterRequest)).toEqual(expectedAppliedFilter);
		});
	});
	
	describe('when the filter request is a range type with multiple options', () => {
		
		it('should return a valid applied filter', () => {
			const availableFilter: DaffCategoryFilter = {
				name: 'name',
				type: DaffCategoryFilterType.Range,
				label: 'label',
				options: [{
					label: 'option_label',
					value: 'value',
					count: null
				},
				{
					label: 'option_label2',
					value: 'value2',
					count: null
				}]
			};
			const filterRequest: DaffCategoryFilterRequest = {
				name: 'name',
				type: DaffCategoryFilterType.Range,
				value: ['value', 'value2']
			};
			const expectedAppliedFilter: DaffCategoryAppliedFilter = {
				name: 'name',
				type: DaffCategoryFilterType.Range,
				label: 'label',
				options: [{
					label: 'option_label',
					value: 'value'
				},
				{
					label: 'option_label2',
					value: 'value2'
				}]
			};

			expect(buildAppliedFilter(availableFilter, filterRequest)).toEqual(expectedAppliedFilter);
		});
	});
	
	describe('when the filter request is a match type with a single option', () => {
		
		it('should return a valid applied filter', () => {
			const availableFilter: DaffCategoryFilter = {
				name: 'name',
				type: DaffCategoryFilterType.Match,
				label: 'label',
				options: [{
					label: 'option_label',
					value: 'value',
					count: null
				}]
			};
			const filterRequest: DaffCategoryFilterRequest = {
				name: 'name',
				type: DaffCategoryFilterType.Match,
				value: 'value'
			};
			const expectedAppliedFilter: DaffCategoryAppliedFilter = {
				name: 'name',
				type: DaffCategoryFilterType.Match,
				label: 'label',
				options: [{
					label: 'option_label',
					value: 'value'
				}]
			};

			expect(buildAppliedFilter(availableFilter, filterRequest)).toEqual(expectedAppliedFilter);
		});
	});
});
