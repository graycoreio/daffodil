import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffOrderMagentoDriver } from './provider';

/**
 * @deprecated prefer {@link provideDaffOrderMagentoDriver}.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffOrderMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffOrderMagentoDriverModule> {
    return {
      ngModule: DaffOrderMagentoDriverModule,
      providers: [
        provideDaffOrderMagentoDriver(),
      ],
    };
  }
}
