import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffAuthMagentoDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffAuthMagentoDriver}
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
