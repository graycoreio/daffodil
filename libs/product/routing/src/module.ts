import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';

import {
  DaffProductRoutingConfig,
  provideDaffProductRoutingConfig,
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
        provideDaffProductRoutingConfig(config),
      ],
    };
  }
}
