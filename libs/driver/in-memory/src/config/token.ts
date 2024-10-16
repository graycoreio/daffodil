import { createConfigInjectionToken } from '@daffodil/core';

import { DAFF_IN_MEMORY_DRIVER_CONFIG_DEFAULT } from './default';
import { DaffInMemoryDriverConfig } from './type';

export const {
  token: DAFF_IN_MEMORY_DRIVER_CONFIG,
  /**
   * Provider function for {@link DAFF_IN_MEMORY_DRIVER_CONFIG}.
   */
  provider: provideDaffInMemoryDriverConfig,
} = createConfigInjectionToken<DaffInMemoryDriverConfig>(DAFF_IN_MEMORY_DRIVER_CONFIG_DEFAULT, 'DAFF_IN_MEMORY_DRIVER_CONFIG');
