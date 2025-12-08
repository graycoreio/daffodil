import { makeEnvironmentProviders } from '@angular/core';

import { MagentoDriverFeatureKind } from './kind.enum';
import { makeMagentoDriverFeature } from './make-feature';
import { MagentoDriverFeature } from './type';
import {
  provideDaffMagentoApolloCacheableOperations,
  provideManyDaffMagentoCacheableOperations,
} from '../graphql/public_api';

/**
 * A {@link provideMagentoDriver} feature that sets up {@link provideDaffMagentoApolloCacheableOperations}.
 */
export const withDaffMagentoCacheableOperations = (...extraOperations: Array<string>): MagentoDriverFeature => makeMagentoDriverFeature(MagentoDriverFeatureKind.CacheableOperations, [
  provideDaffMagentoApolloCacheableOperations(),
  makeEnvironmentProviders(provideManyDaffMagentoCacheableOperations(...extraOperations)),
]);
