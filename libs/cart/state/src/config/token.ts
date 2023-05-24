import {
  InjectionToken,
  ValueProvider,
} from '@angular/core';

import { DAFF_CART_STATE_CONFIG_DEFAULT } from './default';
import { DaffCartStateConfig } from './type';

export const DAFF_CART_STATE_CONFIG = new InjectionToken<DaffCartStateConfig>('DAFF_CART_STATE_CONFIG', { factory: () => DAFF_CART_STATE_CONFIG_DEFAULT });

export function daffCartStateProvideConfig(config: Partial<DaffCartStateConfig>): ValueProvider {
  return {
    provide: DAFF_CART_STATE_CONFIG,
    useValue: {
      ...DAFF_CART_STATE_CONFIG_DEFAULT,
      ...config,
    },
  };
}
