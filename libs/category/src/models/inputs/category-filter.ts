export enum DaffCategoryFilterTypes {
	Match = 'match',
	Equal = 'equal',
	Range = 'range'
}

export interface DaffCategoryFilter {
  label: string;
	attribute_name: string;
	type: DaffCategoryFilterTypes;
	count: number;
	options: DaffCategoryFilterOption[];
}

export interface DaffCategoryFilterOption {
	label: string;
	value: string;
	count: number;
}
