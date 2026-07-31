import { MagentoVersionString } from './magento/public_api';
import { SemanticVersionString } from './semantic/public_api';

export type DaffVersionString = MagentoVersionString | SemanticVersionString;
