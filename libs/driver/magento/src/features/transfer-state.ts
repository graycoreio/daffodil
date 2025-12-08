import {
  inject,
  makeEnvironmentProviders,
  provideAppInitializer,
  TransferState,
  type EnvironmentProviders,
  type StateKey,
} from '@angular/core';
import {
  ApolloCache,
  NormalizedCacheObject,
} from '@apollo/client/cache';

import { createSingleInjectionToken } from '@daffodil/core';

import { MagentoDriverFeatureKind } from './kind.enum';
import { makeMagentoDriverFeature } from './make-feature';
import { MagentoDriverFeature } from './type';

export const {
  /**
   * Holds the `StateKey` with which {@link provideMagentoDriver} can use to transfer Apollo state from the server to the client.
   */
  token: DAFF_DRIVER_MAGENTO_TRANSFER_STATE_KEY,
  /**
   * Provider for {@link DAFF_DRIVER_MAGENTO_TRANSFER_STATE_KEY}.
   */
  provider: provideDaffDriverMagentoTransferStateKey,
} = createSingleInjectionToken<StateKey<any>>('DAFF_DRIVER_MAGENTO_TRANSFER_STATE_KEY');

/**
 * A {@link provideMagentoDriver} feature that sets up transfer state with the specified key.
 *
 * @param stateKey The key under which the Apollo state is stored.
 */
export const withDaffDriverMagentoTransferState = <T extends StateKey<any> = StateKey<any>>(stateKey: T): MagentoDriverFeature => makeMagentoDriverFeature(MagentoDriverFeatureKind.TransferState, [
  provideDaffDriverMagentoTransferStateKey(stateKey),
]);

/**
 * Holds the logic for hydrating the Apollo cache with the server's transferred state.
 * It is recommended to use {@link withDaffDriverMagentoTransferState} with {@link provideMagentoDriver}
 * to provide this functionality automatically.
 *
 * @param cache The Apollo cache instance.
 */
export const provideDaffDriverMagentoTransferState = (cache: ApolloCache<NormalizedCacheObject>): EnvironmentProviders => makeEnvironmentProviders([
  provideAppInitializer(() => {
    const transferState = inject(TransferState);
    const stateKey = inject(DAFF_DRIVER_MAGENTO_TRANSFER_STATE_KEY);
    const hasStateKey = transferState.hasKey(stateKey);
    if (hasStateKey) {
      // reads the serialized cache
      const state = transferState.get<NormalizedCacheObject>(
        stateKey,
        null,
      );
        // and puts it in the Apollo
      cache.restore(state);
    } else {
      // serializes the cache and puts it under a key
      transferState.onSerialize(stateKey, () => cache.extract());
    }
  }),
]);
