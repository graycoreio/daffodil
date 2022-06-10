import { InjectionToken } from '@angular/core';

import { DAFF_SEARCH_STATE_CONFIG_DEFAULT } from './default';
import { DaffSearchStateConfig } from './interface';

/**
 * The token used to provide @daffodil/search/state config data.
 */
export const DAFF_SEARCH_STATE_CONFIG = new InjectionToken<DaffSearchStateConfig>('DAFF_SEARCH_STATE_CONFIG', {
  factory: () => DAFF_SEARCH_STATE_CONFIG_DEFAULT,
});
