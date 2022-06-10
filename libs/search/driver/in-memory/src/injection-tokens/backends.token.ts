import {
  InjectionToken,
  Provider,
  Type,
} from '@angular/core';

import { DaffSearchInMemoryChildBackend } from '../interfaces/public_api';

/**
 * A multi-provider injection token for providing feature-specific search in-memory backends.
 * Feature/search "join" packages should provide a backend here to interface
 * with their feature backend for realistic search behavior.
 */
export const DAFF_SEARCH_IN_MEMORY_BACKENDS = new InjectionToken<DaffSearchInMemoryChildBackend[]>(
  'DAFF_SEARCH_IN_MEMORY_BACKENDS',
  { factory: () => []},
);

/**
 * Provides child feature backends for the search in-memory backend.
 *
 * See {@link DAFF_SEARCH_IN_MEMORY_BACKENDS}.
 *
 * ```ts
 * providers: [
 *   ...daffProvideSearchInMemoryBackends(MySearchFeatureBackend)
 * ]
 * ```
 */
export function daffProvideSearchInMemoryBackends(...drivers: Type<DaffSearchInMemoryChildBackend>[]): Provider[] {
  return drivers.map(driver => ({
    provide: DAFF_SEARCH_IN_MEMORY_BACKENDS,
    useExisting: driver,
    multi: true,
  }));
}
