import { MagentoVersionString } from './magento/public_api';
import { SemanticVersionString } from './semantic/public_api';

export interface DaffJsonProject {
  drivers?: {
    magento?: MagentoVersionString;
    shopify?: SemanticVersionString;
  };
}

export interface DaffJson extends DaffJsonProject {
  $schema?: string;
}
