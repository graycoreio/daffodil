import { MagentoProductFilterTypeField } from './filter-type-field.interface';

export interface MagentoProductGetFilterTypesResponse {
  __type: {
    inputFields: MagentoProductFilterTypeField[];
  };
}
