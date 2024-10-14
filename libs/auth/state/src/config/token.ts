import { createConfigInjectionToken } from '@daffodil/core';

import { daffAuthStateDefaultConfig } from './default';
import { DaffAuthStateConfig } from './type';

export const {
  token: DAFF_AUTH_STATE_CONFIG,
  provider: provideDaffAuthStateConfig,
} = createConfigInjectionToken<DaffAuthStateConfig>(daffAuthStateDefaultConfig, 'DAFF_AUTH_STATE_CONFIG');
