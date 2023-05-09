import {
  inject,
  ModuleWithProviders,
  NgModule,
} from '@angular/core';

import { DaffBase64ServiceToken } from '@daffodil/core';

import {
  DaffProductRoutingConfig,
  daffProductRoutingConfigDefaultFactory,
  DAFF_PRODUCT_ROUTING_CONFIG,
} from './config/public_api';
import {
  DaffProductGetCollectionRequestFromRoute,
  DaffProductGetQueryParamsFromRequest,
} from './services/public_api';

@NgModule({
  providers: [
    DaffProductGetCollectionRequestFromRoute,
    DaffProductGetQueryParamsFromRequest,
  ],
})
export class DaffProductRoutingModule {
  static withConfig(config?: DaffProductRoutingConfig): ModuleWithProviders<DaffProductRoutingModule> {
    return {
      ngModule: DaffProductRoutingModule,
      providers: [
        {
          provide: DAFF_PRODUCT_ROUTING_CONFIG,
          useFactory: () => ({
            ...daffProductRoutingConfigDefaultFactory(inject(DaffBase64ServiceToken)),
            ...config || {},
          }),
        },
      ],
    };
  }
}
