export enum MagentoProductFilterActionEnum {
  Equal = 'eq',
  To = 'to',
  From = 'from',
  In = 'in',
  Match = 'match'
}

export interface MagentoProductFilters {
  [x: string]: MagentoFilterAction;
}

export type MagentoFilterAction = {
  [key in MagentoProductFilterActionEnum]?: string | string[];
};
