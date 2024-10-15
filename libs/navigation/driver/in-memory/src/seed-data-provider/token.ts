import { createSingleInjectionToken } from '@daffodil/core';

import { DaffNavigationInMemorySeedDataProvider } from './type';

export const {
  /**
   * A token for providing a way for the navigation in-memory driver to seed its data from an external source.
   */
  token: DAFF_NAVIGATION_IN_MEMORY_SEED_DATA_PROVIDER,

  /**
   * Provides {@link DAFF_NAVIGATION_IN_MEMORY_SEED_DATA_PROVIDER}.
   */
  provider: provideDaffNavigationInMemorySeedDataProvider,
} = createSingleInjectionToken<DaffNavigationInMemorySeedDataProvider>('DAFF_NAVIGATION_IN_MEMORY_SEED_DATA_PROVIDER');
