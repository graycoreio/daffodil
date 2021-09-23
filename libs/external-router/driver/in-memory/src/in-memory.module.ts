import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffExternalRouterDriver } from '@daffodil/external-router/driver';

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
    config: DaffExternalRouterDriverInMemoryConfig,
  ): ModuleWithProviders<DaffExternalRouterDriverInMemoryModule> {
    return {
      ngModule: DaffExternalRouterDriverInMemoryModule,
      providers: [
        {
          provide: DaffExternalRouterDriver,
          useExisting: DaffExternalRouterInMemoryDriver,
        },
        {
          provide: DAFF_EXTERNAL_ROUTER_DRIVER_IN_MEMORY_CONFIG,
          useValue: config,
        },
      ],
    };
  }
}
