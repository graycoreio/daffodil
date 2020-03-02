export enum DaffCategoryFilterTypes {
	Match = 'match',
	Equal = 'equal',
	Range = 'range'
}

export interface DaffCategoryFilter {
  name: string;
	attribute_name: string;
	type: DaffCategoryFilterTypes;
	items_count: number;
	options: DaffCategoryFilterOption[];
}

export interface DaffCategoryFilterOption {
	label: string;
	value: string;
	items_count: number;
}
