import type { ApolloClientOptions } from '@apollo/client/core';

import { createSingleInjectionToken } from '@daffodil/core';

import { MagentoDriverFeatureKind } from './kind.enum';
import { makeMagentoDriverFeature } from './make-feature';
import { MagentoDriverFeature } from './type';

/**
 * Apollo client options except link and cache, creation of which is done by {@link provideMagentoDriver}.
 */
export type DaffDriverMagentoExtraApolloOptions = Omit<ApolloClientOptions<any>, 'link' | 'cache'>;

export const {
  /**
   * A token to hold {@link DaffDriverMagentoExtraApolloOptions}.
   */
  token: DAFF_DRIVER_MAGENTO_EXTRA_APOLLO_OPTIONS,
  /**
   * A provider for {@link DAFF_DRIVER_MAGENTO_EXTRA_APOLLO_OPTIONS}.
   */
  provider: provideDaffDriverMagentoExtraApolloOptions,
  /**
   * A factory provider for {@link DAFF_DRIVER_MAGENTO_EXTRA_APOLLO_OPTIONS}.
   */
  factoryProvider: provideDaffDriverMagentoExtraApolloOptionsFactory,
} = createSingleInjectionToken<DaffDriverMagentoExtraApolloOptions>('DAFF_DRIVER_MAGENTO_EXTRA_APOLLO_OPTIONS', {
  factory: () => ({}),
});

/**
 * A {@link provideMagentoDriver} feature that allow specifying {@link DaffDriverMagentoExtraApolloOptions}.
 */
export const withDaffDriverMagentoExtraApolloOptions = (options: DaffDriverMagentoExtraApolloOptions): MagentoDriverFeature => makeMagentoDriverFeature(MagentoDriverFeatureKind.TransferState, [
  provideDaffDriverMagentoExtraApolloOptions(options),
]);
