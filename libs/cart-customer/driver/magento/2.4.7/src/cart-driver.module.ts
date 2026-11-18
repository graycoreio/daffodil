import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCartCustomerMagentoDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffCartCustomerMagentoDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCartCustomerMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffCartCustomerMagentoDriverModule> {
    return {
      ngModule: DaffCartCustomerMagentoDriverModule,
      providers: [
        provideDaffCartCustomerMagentoDriver(),
      ],
    };
  }
}
