import { createServicesInjectionToken } from '@daffodil/core';

import { DaffInMemoryBackendInterface } from './type';

export const {
  token: DAFF_IN_MEMORY_BACKENDS,
  provider: provideDaffInMemoryBackends,
} = createServicesInjectionToken<DaffInMemoryBackendInterface>('DAFF_IN_MEMORY_BACKENDS');
