import {
  MagentoAttribute,
  MagentoAttributeMetadataError,
} from '../custom-attributes/public_api';

export interface MagentoAttributeMetadataOutput {
  items: Array<MagentoAttribute>;
  errors: Array<MagentoAttributeMetadataError>;
}
