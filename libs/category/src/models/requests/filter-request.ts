import { DaffCategoryFilterType } from '../category-filter';

/**
 * The separator between a range type filter's values
 * e.g. "price": "30-40"
 */
export const DaffCategoryFromToFilterSeparator = '-';

export interface DaffToggleCategoryFilterMatchRequest {
	type: DaffCategoryFilterType.Match;
	name: string;
	value: string;
	label?: string;
}

export interface DaffToggleCategoryFilterEqualRequest {
	type: DaffCategoryFilterType.Equal;
	name: string;
	value: string;
	label?: string;
}

export interface DaffToggleCategoryFilterRangeRequest {
	type: DaffCategoryFilterType.Range;
	name: string;
	value: string;
	label?: string;
}

export interface DaffCategoryFilterEqualRequest {
	type: DaffCategoryFilterType.Equal;
	name: string;
	value: string[];
	label?: string;
}

export interface DaffCategoryFilterMatchRequest {
	type: DaffCategoryFilterType.Match;
	name: string;
	value: string;
	label?: string;
}

export interface DaffCategoryFilterRangeRequest {
	type: DaffCategoryFilterType.Range;
	name: string;
	value: string[];
	label?: string;
}

export type DaffToggleCategoryFilterRequest =
	DaffToggleCategoryFilterMatchRequest |
	DaffToggleCategoryFilterEqualRequest |
	DaffToggleCategoryFilterRangeRequest;

export type DaffCategoryFilterRequest = 
	DaffCategoryFilterMatchRequest | 
	DaffCategoryFilterEqualRequest | 
	DaffCategoryFilterRangeRequest;
