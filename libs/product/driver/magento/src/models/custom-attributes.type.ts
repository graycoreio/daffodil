import {
  MagentoAttributeMetadataError,
  MagentoAttributeValue,
} from '../custom-attributes/public_api';

export interface MagentoCustomAttributes {
  items: Array<MagentoAttributeValue>;
  errors: Array<MagentoAttributeMetadataError>;
}
