import { MagentoVersionString } from './magento/public_api';
import { SemanticVersionString } from './semantic/public_api';

/**
 * A string that represents a possible driver version.
 */
export type DaffVersionString = MagentoVersionString | SemanticVersionString;
