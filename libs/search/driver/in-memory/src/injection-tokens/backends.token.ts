import { createServicesInjectionToken } from '@daffodil/core';

import { DaffSearchInMemoryChildBackend } from '../interfaces/public_api';

export const {
  /**
   * A multi-provider injection token for providing feature-specific search in-memory backends.
   * Feature/search "join" packages should provide a backend here to interface
   * with their feature backend for realistic search behavior.
   */
  token: DAFF_SEARCH_IN_MEMORY_BACKENDS,

  /**
   * Provides child feature backends for the search in-memory backend.
   *
   * See {@link DAFF_SEARCH_IN_MEMORY_BACKENDS}.
   *
   * @example
   * ```ts
   * providers: [
   *   ...provideDaffSearchInMemoryBackends(MySearchFeatureBackend)
   * ]
   * ```
   */
  provider: provideDaffSearchInMemoryBackends,
} = createServicesInjectionToken<DaffSearchInMemoryChildBackend>('DAFF_SEARCH_IN_MEMORY_BACKENDS');
