import {
  inject,
  InjectionToken,
} from '@angular/core';

import { DaffBase64ServiceToken } from '@daffodil/core';

import { daffProductRoutingConfigDefaultFactory } from './default';
import { DaffProductRoutingConfig } from './interface';

/**
 * The token used to provide @daffodil/product/routing config data.
 */
export const DAFF_PRODUCT_ROUTING_CONFIG = new InjectionToken<DaffProductRoutingConfig>('DAFF_PRODUCT_ROUTING_CONFIG', {
  factory: () => daffProductRoutingConfigDefaultFactory(inject(DaffBase64ServiceToken)),
});
