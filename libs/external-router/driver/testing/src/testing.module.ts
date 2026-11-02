import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffExternalRouterDriverTestingConfig } from './config';
import { provideDaffExternalRouterTestingDriver } from './provider';

/**
 * The `DaffExternalRouterDriverTestingModule` is an importable NgModule that can
 * be used to configure the {@link DaffExternalRouterTestingDriver}.
 *
 * @deprecated in favor of {@link provideDaffExternalRouterTestingDriver}
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
        provideDaffExternalRouterTestingDriver(config),
      ],
    };
  }
}
