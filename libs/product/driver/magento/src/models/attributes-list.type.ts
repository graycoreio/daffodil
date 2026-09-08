import {
  MagentoAttribute,
  MagentoAttributeMetadataError,
} from '../custom-attributes/public_api';

export interface MagentoAttributesList {
  items: Array<MagentoAttribute>;
  errors: Array<MagentoAttributeMetadataError>;
}
