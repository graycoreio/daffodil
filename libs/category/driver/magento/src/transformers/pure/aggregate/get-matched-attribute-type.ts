import {
  MagentoAggregation,
  MagentoCustomAttributeMetadataResponse,
} from '../../../models/public_api';

export const getMatchedAttributeType = (aggregate: MagentoAggregation, attributes: MagentoCustomAttributeMetadataResponse): string => {
  if (aggregate.attribute_code === 'category_id') {
    return 'select';
  }

  return attributes.customAttributeMetadata.items.filter(item => item.attribute_code === aggregate.attribute_code)[0].input_type;
};
