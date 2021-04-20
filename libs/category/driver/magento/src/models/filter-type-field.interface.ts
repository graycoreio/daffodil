import { MagentoCategoryFilterType } from './filter-type.enum';

export interface MagentoCategoryFilterTypeField {
  name: string;
  type: {
    name: MagentoCategoryFilterType;
  };
}
