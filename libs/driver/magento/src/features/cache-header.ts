import { MagentoDriverFeatureKind } from './kind.enum';
import { makeMagentoDriverFeature } from './make-feature';
import { MagentoDriverFeature } from './type';
import { provideDaffMagentoCacheHeader } from '../graphql/public_api';

/**
 * A {@link provideMagentoDriver} feature that sets up {@link provideDaffMagentoCacheHeader}.
 */
export const withDaffMagentoCacheHeader = (): MagentoDriverFeature => makeMagentoDriverFeature(MagentoDriverFeatureKind.CacheHeader, [
  provideDaffMagentoCacheHeader(),
]);
