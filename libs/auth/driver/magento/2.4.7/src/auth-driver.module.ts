import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffAuthMagentoDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffAuthMagentoDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffAuthMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffAuthMagentoDriverModule> {
    return {
      ngModule: DaffAuthMagentoDriverModule,
      providers: [
        provideDaffAuthMagentoDriver(),
      ],
    };
  }
}
