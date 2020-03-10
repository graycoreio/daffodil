export enum DaffCategoryFilterActionEnum {
	Equal = 'eq',
	FromTo = 'fromto',
	In = 'in',
	Match = 'match'
}

/**
 * The separator between a range type filter's values
 * e.g. "price": "30-40"
 */
export const DaffCategoryFromToFilterSeparator = '-';

export interface DaffCategoryFilterAction {
	action: DaffCategoryFilterActionEnum;
	name: string;
	value: string;
	label?: string;
}
