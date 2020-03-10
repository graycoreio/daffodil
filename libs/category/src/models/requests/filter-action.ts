export enum DaffCategoryFilterActionEnum {
	Equal = 'eq',
	To = 'to',
	From = 'from',
	In = 'in',
	Match = 'match'
}

export interface DaffCategoryFilterAction {
	action: DaffCategoryFilterActionEnum;
	name: string;
	value: string;
	label?: string;
}
