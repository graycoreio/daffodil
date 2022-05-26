import { MagentoProductFilterType } from './filter-type.enum';

export interface MagentoProductFilterTypeField {
  name: string;
  type: {
    name: MagentoProductFilterType;
  };
}
