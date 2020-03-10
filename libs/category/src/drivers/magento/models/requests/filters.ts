export enum MagentoCategoryFilterActionEnum {
	Equal = 'eq',
	To = 'to',
	From = 'from',
	In = 'in',
	Match = 'match'
}

export interface MagentoCategoryFilters {
	[x: string]: MagentoFilterAction;
}

export type MagentoFilterAction = {
	[key in MagentoCategoryFilterActionEnum]?: string;
}
