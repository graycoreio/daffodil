import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffExternalRouterDriver } from '@daffodil/external-router/driver';

import {
  DaffExternalRouterDriverTestingConfig,
  DAFF_EXTERNAL_ROUTER_DRIVER_TESTING_CONFIG,
} from './config';
import { DaffExternalRouterTestingDriver } from './testing.service';

/**
 * The `DaffExternalRouterDriverTestingModule` is an importable NgModule that can
 * be used to configure the {@link DaffExternalRouterTestingDriver}.
 */
@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class DaffExternalRouterDriverTestingModule {
  static forRoot(
    config: DaffExternalRouterDriverTestingConfig,
  ): ModuleWithProviders<DaffExternalRouterDriverTestingModule> {
    return {
      ngModule: DaffExternalRouterDriverTestingModule,
      providers: [
        provideDaffExternalRouterDriver(DaffExternalRouterTestingDriver),
        {
          provide: DAFF_EXTERNAL_ROUTER_DRIVER_TESTING_CONFIG,
          useValue: config,
        },
      ],
    };
  }
}
