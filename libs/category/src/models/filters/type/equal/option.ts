import { DaffCategoryFilterOptionBase } from '../../category-filter-option-base';

/**
 * The individual options applicable to a filter. Such an option may be something like
 * "Red" or "Green", "Tall" or "Short", etc.
 */
export interface DaffCategoryFilterEqualOption extends DaffCategoryFilterOptionBase {
	applied: boolean;
	value: string;
	label: string;
	count: number;
}
