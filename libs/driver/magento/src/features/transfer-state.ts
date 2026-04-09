import {
  inject,
  makeEnvironmentProviders,
  provideAppInitializer,
  TransferState,
  type EnvironmentProviders,
  type StateKey,
} from '@angular/core';
import { NormalizedCacheObject } from '@apollo/client/cache';
import { Apollo } from 'apollo-angular';

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
 */
export const provideDaffDriverMagentoTransferState = (): EnvironmentProviders => makeEnvironmentProviders([
  provideAppInitializer(() => {
    const cache = inject(Apollo).client.cache;
    const transferState = inject(TransferState);
    const stateKey = inject(DAFF_DRIVER_MAGENTO_TRANSFER_STATE_KEY);
    const hasStateKey = transferState.hasKey(stateKey);
    if (hasStateKey) {
      const state = transferState.get<NormalizedCacheObject>(
        stateKey,
        null,
      );
      cache.restore(state);
    } else {
      transferState.onSerialize(stateKey, () => cache.extract());
    }
  }),
]);
