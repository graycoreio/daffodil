import {
  InjectionToken,
  inject,
} from '@angular/core';

import {
  DaffBase64Service,
  DaffBase64ServiceToken,
} from '@daffodil/core';

import { DaffProductCompositeRoutingConfig } from './interface';

/**
 * The default configuration for the {@link DaffProductCompositeRoutingConfig}.
 */
export const daffProductCompositeRoutingConfigDefaultFactory = (base64: DaffBase64Service): DaffProductCompositeRoutingConfig => ({
  compositeSelectionQueryParam: 'composite_selection',
  compositeSelectionQueryParamDecode: (queryParam: string) => JSON.parse(base64.decode(queryParam)),
});

export const DAFF_PRODUCT_COMPOSITE_ROUTING_CONFIG_DEFAULT = new InjectionToken<DaffProductCompositeRoutingConfig>(
  'DAFF_PRODUCT_COMPOSITE_ROUTING_CONFIG_DEFAULT',
  { factory: () => daffProductCompositeRoutingConfigDefaultFactory(inject(DaffBase64ServiceToken)) },
);
