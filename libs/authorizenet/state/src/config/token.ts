import { createConfigInjectionToken } from '@daffodil/core';

import { daffAuthorizeNetStateDefaultConfig } from './default';
import { DaffAuthorizeNetStateConfig } from './type';

export const {
  token: DAFF_AUTHORIZE_NET_STATE_CONFIG,
  provider: provideDaffAuthorizeNetStateConfig,
} = createConfigInjectionToken<DaffAuthorizeNetStateConfig>(daffAuthorizeNetStateDefaultConfig, 'DAFF_AUTHORIZE_NET_STATE_CONFIG');
