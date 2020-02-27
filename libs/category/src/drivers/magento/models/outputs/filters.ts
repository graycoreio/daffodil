export interface MagentoCategoryFilters {
	[x: string]: MagentoFilterAction;
}

export interface MagentoFilterAction {
	[x: string]: string;
}
