import {
  MagentoAggregation,
  MagentoCustomMetadataAttribute,
} from '../../../models/public_api';

export function buildCustomMetadataAttribute(filter: MagentoAggregation): MagentoCustomMetadataAttribute {
  return {
    attribute_code: filter.attribute_code,
    entity_type: '4',
  };
}
