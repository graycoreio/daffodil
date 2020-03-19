export enum DaffCategoryFilterType {
	Match = 'match',
	Equal = 'equal',
	Range = 'range'
}

export interface DaffCategoryFilterBase {
	label: string;
	name: string;
	type: DaffCategoryFilterType;
}
