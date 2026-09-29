import { MagentoVersionString } from './magento/public_api';
import { SemanticVersionString } from './semantic/public_api';

type PackageName = string;

/**
 * Represents the available drivers and their supported versions.
 */
export interface DaffPackagePlatformVersions {
  magento?: Record<PackageName, Array<MagentoVersionString>>;
  shopify?: Record<PackageName, Array<SemanticVersionString>>;
};
