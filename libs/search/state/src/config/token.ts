import { createConfigInjectionToken } from '@daffodil/core';

import { DAFF_SEARCH_STATE_CONFIG_DEFAULT } from './default';
import { DaffSearchStateConfig } from './interface';

export const {
  /**
   * The token used to provide @daffodil/search/state config data.
   */
  token: DAFF_SEARCH_STATE_CONFIG,
  provider: provideDaffSearchStateConfig,
} = createConfigInjectionToken<DaffSearchStateConfig>(DAFF_SEARCH_STATE_CONFIG_DEFAULT, 'DAFF_SEARCH_STATE_CONFIG');
