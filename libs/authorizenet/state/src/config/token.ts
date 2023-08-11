import {
  InjectionToken,
  ValueProvider,
} from '@angular/core';

import { daffAuthorizeNetStateDefaultConfig } from './default';
import { DaffAuthorizeNetStateConfig } from './type';

export const DAFF_AUTHORIZE_NET_STATE_CONFIG = new InjectionToken('DAFF_AUTHORIZE_NET_STATE_CONFIG', { factory: () => daffAuthorizeNetStateDefaultConfig });

export const provideDaffAuthorizeNetStateConfig = (config: DaffAuthorizeNetStateConfig): ValueProvider => ({
  provide: DAFF_AUTHORIZE_NET_STATE_CONFIG,
  useValue: config,
});
