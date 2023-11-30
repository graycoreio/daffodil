import {
  InjectionToken,
  ValueProvider,
} from '@angular/core';

import { DaffNavigationInMemorySeedDataProvider } from './type';

/**
 * A token for providing a way for the navigation in-memory driver to seed its data from an external source.
 */
export const DAFF_NAVIGATION_IN_MEMORY_SEED_DATA_PROVIDER = new InjectionToken<DaffNavigationInMemorySeedDataProvider>('DAFF_NAVIGATION_IN_MEMORY_SEED_DATA_PROVIDER');

/**
 * Provides {@link DAFF_NAVIGATION_IN_MEMORY_SEED_DATA_PROVIDER}.
 */
export function daffProvideNavigationInMemorySeedDataProvider(provider: DaffNavigationInMemorySeedDataProvider): ValueProvider {
  return {
    provide: DAFF_NAVIGATION_IN_MEMORY_SEED_DATA_PROVIDER,
    useValue: provider,
  };
}
