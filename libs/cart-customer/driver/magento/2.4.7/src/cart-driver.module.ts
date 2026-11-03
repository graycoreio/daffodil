import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCartCustomerMagentoDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffCartCustomerMagentoDriver}
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
