import { MagentoVersionString } from './magento/public_api';
import { SemanticVersionString } from './semantic/public_api';

/**
 * A configuration of driver information for a project using the auto driver versioning.
 */
export interface DaffVersioningProject {
  /**
   * The driver versions.
   */
  drivers: {
    /**
     * The magento version.
     */
    magento?: MagentoVersionString;
    /**
     * The shopify version.
     */
    shopify?: SemanticVersionString;
  };
  /**
   * The packages that contain third party auto versioned drivers.
   * Daffodil packages are automatically included; there is no need to specify it here.
   */
  packages: Array<string>;
}
