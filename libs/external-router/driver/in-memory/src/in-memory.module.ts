import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
  InjectionToken,
  inject,
} from '@angular/core';

import { provideDaffExternalRouterDriver } from '@daffodil/external-router/driver';

import {
  DaffExternalRouterDriverInMemoryConfig,
  DAFF_EXTERNAL_ROUTER_DRIVER_IN_MEMORY_CONFIG,
} from './config';
import { DaffExternalRouterInMemoryDriver } from './in-memory.service';

/**
 * The `DaffExternalRouterDriverInMemoryModule` is an importable NgModule that can
 * be used to configure the {@link DaffExternalRouterInMemoryDriver}.
 */
@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class DaffExternalRouterDriverInMemoryModule {
  static forRoot(
    config: DaffExternalRouterDriverInMemoryConfig | InjectionToken<DaffExternalRouterDriverInMemoryConfig>,
  ): ModuleWithProviders<DaffExternalRouterDriverInMemoryModule> {
    return {
      ngModule: DaffExternalRouterDriverInMemoryModule,
      providers: [
        provideDaffExternalRouterDriver(DaffExternalRouterInMemoryDriver),
        {
          provide: DAFF_EXTERNAL_ROUTER_DRIVER_IN_MEMORY_CONFIG,
          // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
          useFactory() {
            return config instanceof InjectionToken ? inject(config) : config;
          },
        },
      ],
    };
  }
}
