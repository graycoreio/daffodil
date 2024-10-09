import { createServicesInjectionToken } from '@daffodil/core';

import { DaffInMemoryBackendInterface } from './type';

export const {
  /**
   * A token that holds the currently loaded in-memory backends.
   */
  token: DAFF_IN_MEMORY_BACKENDS,
  /**
   * Provide backend classes to {@link DAFF_IN_MEMORY_BACKENDS}.
   */
  provider: provideDaffInMemoryBackends,
} = createServicesInjectionToken<DaffInMemoryBackendInterface>('DAFF_IN_MEMORY_BACKENDS');
