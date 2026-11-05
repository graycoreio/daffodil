import {
  MagentoAggregation,
  MagentoProductFilterType,
  MagentoProductFilterTypeField,
} from '../../models/public_api';

export const magentoProductGetMatchedAttributeType = (aggregate: MagentoAggregation, inputFields: MagentoProductFilterTypeField[]): MagentoProductFilterType =>
  inputFields.find(item => item.name === aggregate.attribute_code).type.name;
