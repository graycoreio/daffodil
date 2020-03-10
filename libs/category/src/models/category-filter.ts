export enum DaffCategoryFilterType {
	Match = 'match',
	Equal = 'equal',
	Range = 'range'
}

export interface DaffCategoryFilter {
  label: string;
	name: string;
	type: DaffCategoryFilterType;
	items_count: number;
	options: DaffCategoryFilterOption[];
}

export interface DaffCategoryFilterOption {
	label: string;
	value: string;
	items_count: number;
}
